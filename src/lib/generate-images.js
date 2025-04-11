// This script uses Replicate to generate images for the portfolio site
const fs = require('fs');
const path = require('path');
const https = require('https');
const Replicate = require('replicate');

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Helper function to download an image
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        console.log(`Following redirect to: ${response.headers.location}`);
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded image to ${filepath}`);
        resolve(filepath);
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    });
    
    request.on('error', (err) => {
      reject(err);
    });
    
    // Set a timeout
    request.setTimeout(30000, () => {
      request.abort();
      reject(new Error('Request timeout'));
    });
  });
}

// Generate images using Replicate
async function generateImages() {
  try {
    // Initialize the Replicate client with the API key
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    // Project images based on Chiara's portfolio descriptions
    const projectPrompts = [
      "A responsive personal portfolio website showcasing web development skills, with HTML5 and CSS3, professional and clean design with purple accents",
      "A luxurious steakhouse website with elegant design, dark theme with gold accents, featuring Next.js modern interface and responsive layout",
      "A swimming lessons website with blue water theme, showing swimming techniques and lessons information, clean and professional design"
    ];

    const projectOutputNames = [
      'portfolio-project.jpg',
      'luxcore.jpg',
      'goswim.jpg'
    ];
    
    for (let i = 0; i < projectPrompts.length; i++) {
      const outputPath = path.join(publicDir, projectOutputNames[i]);
      
      console.log(`Generating image for: "${projectPrompts[i]}" and saving to ${outputPath}`);
      
      try {
        // Use Stability AI's SDXL model via Replicate
        const output = await replicate.run(
          "stability-ai/sdxl:c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316",
          {
            input: {
              prompt: projectPrompts[i],
              negative_prompt: "low quality, blurry, amateur, distorted, ugly",
              width: 1024,
              height: 768,
              num_outputs: 1,
              scheduler: "K_EULER",
              num_inference_steps: 50,
              guidance_scale: 7.5,
              apply_watermark: false
            }
          }
        );
        
        console.log(`Generated image URL: ${output[0]}`);
        
        // Download the generated image
        await downloadImage(output[0], outputPath);
      } catch (error) {
        console.error(`Error generating image for ${projectOutputNames[i]}:`, error.message);
        // Create placeholder if image generation fails
        if (!fs.existsSync(outputPath)) {
          console.log(`Creating placeholder file for ${outputPath}`);
          fs.writeFileSync(outputPath, `Placeholder for: ${projectPrompts[i]}`);
        }
      }
    }

    console.log('Image generation complete!');
  } catch (error) {
    console.error('Error in image generation process:', error);
  }
}

// Export the function for use in other files
module.exports = {
  generateImages
};

// If this file is run directly (not imported), run the image generation
if (require.main === module) {
  generateImages();
}
