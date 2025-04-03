# JMEFIT Branding & Marketing Strategy

<div align="center">
  <img src="https://via.placeholder.com/500x150?text=JMEFIT+Brand+Strategy" alt="JMEFIT Brand Strategy" />
  <p><em>Transform Your Body. Transform Your Life.</em></p>
</div>

## About This Repository

This repository contains the branding and marketing strategy for JMEFIT, a fitness and nutrition coaching brand led by Jaime Tharpe, a certified nutrition and fitness coach with hormone specialization and 17 years of experience in the industry.

## Repository Structure

```
├── docs/                  # Documentation files
│   ├── brand/            # Brand identity documents
│   ├── research/         # Market research documents
│   └── strategy/         # Marketing strategy documents
├── images/               # Image assets
│   └── generated/        # AI-generated images using Ideogram
├── src/                  # Source code
│   └── api/              # API integration scripts
└── .env                  # Environment variables (not tracked in git)
```

## Documentation

### Brand Identity
- **[Brand Map](docs/brand/jamie_fit_brand_map.md)**: Comprehensive overview of JMEFIT's brand identity, target audience, and marketing strategy
- **[Brand Identity Diagram](docs/brand/brand_identity_diagram.md)**: Visual representation of JMEFIT's core values and brand personality
- **[Target Audience Map](docs/brand/target_audience_map.md)**: Detailed breakdown of JMEFIT's primary and secondary audiences

### Market Research
- **[Fitness Marketing Research](docs/research/fitness_marketing_research_2025.md)**: In-depth research on current fitness and nutrition industry trends
- **[Research Plan](docs/research/research_plan.md)**: Initial research plan for developing the marketing strategy

### Marketing Strategy
- **[Content Strategy Flowchart](docs/strategy/content_strategy_flowchart.md)**: Visual guide to content pillars and distribution strategy
- **[Marketing Channels Diagram](docs/strategy/marketing_channels_diagram.md)**: Overview of key marketing channels and their interconnections

## Image Generation

This repository includes AI image generation capabilities using the Ideogram API via fal.ai. You can generate custom images for JMEFIT's branding and marketing materials.

## Brand Overview

JMEFIT is focused on providing sustainable fitness and nutrition approaches, particularly for women who have struggled with weight fluctuations, restrictive dieting, and finding a balanced lifestyle. The brand emphasizes working with your body rather than against it, with special attention to hormonal health and its impact on fitness.

## Key Differentiators

- **Hormone Specialization**: Understanding the unique hormonal factors affecting women's fitness
- **Life Experience**: Drawing from personal struggles with weight fluctuations and diet challenges
- **Age-Focused Expertise**: Specializing in fitness for women in their 30s, 40s, and beyond
- **Sustainable Approach**: Rejecting quick fixes in favor of sustainable lifestyle changes

## Target Audience

JMEFIT primarily serves women aged 35-55 who are experiencing body changes due to age and hormonal shifts, have been frustrated with previous diet/exercise programs, and are seeking sustainable approaches to fitness and nutrition.

## Using the Image Generator

This repository includes a tool to generate custom images for JMEFIT branding using the Ideogram AI API:

```bash
# Install dependencies
npm install

# Run the interactive image generator
node src/index.js

# Or generate a specific image directly
npm run generate-image -- --prompt "Your detailed prompt here" --category "brand"
```

Generated images will be saved in the `images/generated/` directory, organized by category.

## Getting Started

1. Clone this repository
2. Create a `.env` file with your FAL_API_KEY (if not already present)
3. Install dependencies: `npm install`
4. Explore the documentation in the `docs/` directory
5. Generate custom images using the image generator

---

<div align="center">
  <p>© 2025 JMEFIT. All rights reserved.</p>
</div>
