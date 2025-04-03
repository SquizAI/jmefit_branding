#!/usr/bin/env node

require('dotenv').config();
const { createClient } = require('@fal-ai/serverless-client');
const fs = require('fs-extra');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

// Parse command line arguments
const argv = yargs(hideBin(process.argv))
  .option('prompt', {
    alias: 'p',
    description: 'Text prompt for image generation',
    type: 'string',
    demandOption: true
  })
  .option('negative-prompt', {
    alias: 'n',
    description: 'Negative prompt to exclude from generation',
    type: 'string',
    default: 'blurry, low quality, distorted, deformed'
  })
  .option('output', {
    alias: 'o',
    description: 'Output filename (without extension)',
    type: 'string'
  })
  .option('category', {
    alias: 'c',
    description: 'Category folder for the image (brand, marketing, content)',
    type: 'string',
    default: 'brand'
  })
  .help()
  .alias('help', 'h')
  .argv;

// Initialize the fal.ai client
const fal = createClient({
  credentials: process.env.FAL_API_KEY,
});

// Ensure output directories exist
const categoryDir = path.join(__dirname, '../../images/generated', argv.category);
fs.ensureDirSync(categoryDir);

// Generate a default output filename if not provided
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const outputFilename = argv.output ? 
  `${argv.output}.png` : 
  `${argv.prompt.substring(0, 20).replace(/[^a-z0-9]/gi, '-').toLowerCase()}-${timestamp}.png`;

const outputPath = path.join(categoryDir, outputFilename);

// Function to generate image
async function generateImage() {
  console.log('Generating image with prompt:', argv.prompt);
  console.log('This may take a minute...');
  
  try {
    const result = await fal.subscribe("fal-ai/ideogram", {
      input: {
        prompt: argv.prompt,
        negative_prompt: argv['negative-prompt'],
        aspect_ratio: "1:1",
        style_preset: "photographic"
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === 'IN_PROGRESS') {
          console.log(`Generation in progress... (${Math.round(update.progress * 100)}%)`);
        }
      }
    });

    // Save the image
    if (result && result.images && result.images.length > 0) {
      const imageUrl = result.images[0].url;
      console.log('Image generated successfully!');
      console.log('Downloading image...');
      
      // Download the image
      const response = await fetch(imageUrl);
      const buffer = await response.arrayBuffer();
      
      // Save to file
      fs.writeFileSync(outputPath, Buffer.from(buffer));
      console.log(`Image saved to: ${outputPath}`);
      
      // Return the path for further use
      return outputPath;
    } else {
      console.error('No images were generated.');
      return null;
    }
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
}

// Execute the image generation
generateImage().catch(console.error);
