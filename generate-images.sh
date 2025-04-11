#!/bin/bash

# This script runs the image generation with the Replicate API key
# Make sure to chmod +x generate-images.sh to make it executable

# Set the Replicate API token as an environment variable
export REPLICATE_API_TOKEN="your-replicate-api-token-here"

# Run the image generation script
node src/lib/generate-images.js

# Unset the API token when done for security
unset REPLICATE_API_TOKEN

echo "Image generation process completed!"
