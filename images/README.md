# JMEFIT Image Generation

This directory contains images for the JMEFIT branding and marketing strategy.

## Directory Structure

- `/generated` - AI-generated images using the Ideogram API
  - `/brand` - Brand identity images (logo, banners, etc.)
  - `/marketing` - Marketing campaign images
  - `/content` - Content-related images for social media and blog posts

## Generating New Images

You can generate new images using the Ideogram AI API by running the image generation script:

```bash
# Install dependencies first
npm install

# Run the interactive image generator
node src/index.js

# Or generate a specific image directly
npm run generate-image -- --prompt "Your detailed prompt here" --output "filename" --category "brand"
```

### Command Line Options

When using the direct command, the following options are available:

- `--prompt` or `-p`: Text prompt for image generation (required)
- `--negative-prompt` or `-n`: Negative prompt to exclude from generation (default: "blurry, low quality, distorted, deformed")
- `--output` or `-o`: Output filename without extension (optional)
- `--category` or `-c`: Category folder for the image (brand, marketing, content) (default: "brand")

### Example Prompts

Here are some example prompts that work well for JMEFIT branding:

1. **Brand Identity**
   ```
   Professional fitness logo for JMEFIT, minimalist design, focusing on women's fitness and hormone health
   ```

2. **Target Audience**
   ```
   Fit woman in her 40s with athletic build in workout clothes, professional photography, bright lighting
   ```

3. **Transformation Results**
   ```
   Before and after fitness transformation of a woman in her 40s, professional photography
   ```

4. **Workout Imagery**
   ```
   Woman in her 40s doing strength training, professional fitness photography, bright gym setting
   ```

5. **Nutrition Content**
   ```
   Healthy balanced meal preparation for hormone health, professional food photography
   ```
