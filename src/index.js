#!/usr/bin/env node

require('dotenv').config();
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define brand-specific prompts
const brandPrompts = {
  logo: 'Professional fitness logo for JMEFIT, minimalist design, focusing on women\'s fitness and hormone health',
  banner: 'Website banner for JMEFIT fitness brand, showing a fit woman in her 40s, professional photography style',
  coach: 'Professional portrait of a female fitness coach in her 40s, blonde hair, athletic build, smiling confidently',
  workout: 'Woman in her 40s doing strength training, professional fitness photography, bright gym setting',
  transformation: 'Before and after fitness transformation of a woman in her 40s, professional photography',
  nutrition: 'Healthy balanced meal preparation for hormone health, professional food photography',
  community: 'Group of diverse women in their 30s-50s in a fitness class, supportive atmosphere, professional photography'
};

// Function to display menu and get user choice
function showMenu() {
  console.log('\n=== JMEFIT Image Generator ===');
  console.log('Select an image type to generate:');
  
  Object.keys(brandPrompts).forEach((key, index) => {
    console.log(`${index + 1}. ${key.charAt(0).toUpperCase() + key.slice(1)}`);
  });
  
  console.log('8. Custom prompt');
  console.log('9. Exit');
  
  rl.question('\nEnter your choice (1-9): ', (answer) => {
    const choice = parseInt(answer);
    
    if (choice >= 1 && choice <= Object.keys(brandPrompts).length) {
      const promptKey = Object.keys(brandPrompts)[choice - 1];
      const promptText = brandPrompts[promptKey];
      
      rl.question(`\nCategory folder (brand, marketing, content) [brand]: `, (category) => {
        const categoryFolder = category || 'brand';
        
        rl.question(`\nCustomize the prompt? (Press Enter to use default or type to customize):\n${promptText}\n\nYour prompt: `, (customPrompt) => {
          const finalPrompt = customPrompt || promptText;
          generateImage(finalPrompt, promptKey, categoryFolder);
        });
      });
    } else if (choice === 8) {
      rl.question('\nEnter your custom prompt: ', (customPrompt) => {
        rl.question('\nEnter output filename (without extension): ', (filename) => {
          rl.question('\nCategory folder (brand, marketing, content) [brand]: ', (category) => {
            const categoryFolder = category || 'brand';
            generateImage(customPrompt, filename, categoryFolder);
          });
        });
      });
    } else if (choice === 9) {
      console.log('Exiting program. Goodbye!');
      rl.close();
    } else {
      console.log('Invalid choice. Please try again.');
      showMenu();
    }
  });
}

// Function to generate image using the API script
function generateImage(prompt, outputName, category) {
  console.log(`\nGenerating image with prompt: "${prompt}"`);
  console.log('Please wait, this may take a minute...');
  
  const generateScript = path.join(__dirname, 'api', 'generate-image.js');
  
  const args = [
    generateScript,
    '--prompt', prompt,
    '--output', outputName,
    '--category', category
  ];
  
  const process = spawn('node', args, { stdio: 'inherit' });
  
  process.on('close', (code) => {
    if (code === 0) {
      rl.question('\nGenerate another image? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
          showMenu();
        } else {
          console.log('Exiting program. Goodbye!');
          rl.close();
        }
      });
    } else {
      console.log(`\nImage generation failed with code ${code}`);
      rl.question('\nTry again? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
          showMenu();
        } else {
          console.log('Exiting program. Goodbye!');
          rl.close();
        }
      });
    }
  });
}

// Start the program
console.log('Welcome to the JMEFIT Image Generator!');
console.log('This tool uses the Ideogram AI API to generate images for JMEFIT branding.');
showMenu();
