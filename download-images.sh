#!/bin/bash

# This script downloads the generated images from Replicate URLs

# Portfolio project image
echo "Downloading portfolio-project.jpg..."
curl -L "https://replicate.delivery/xezq/5fTEHn74dm1YcilEccCM41kJ2KCYcbll65VzokocgXZDr5QKA/out-0.png" -o "public/portfolio-project.jpg"

# LuxCore steakhouse website image
echo "Downloading luxcore.jpg..."
curl -L "https://replicate.delivery/xezq/CFgef8PbjjpbqEgTsBYbCeJSYhoMyoZDslYgh0NOFeFuYNHSB/out-0.png" -o "public/luxcore.jpg"

# GoSwim website image
echo "Downloading goswim.jpg..."
curl -L "https://replicate.delivery/xezq/PWUTvt5eKXx5cSx30TgnZn1iYGf3rYT5ZFFkfGnesy8GZNHSB/out-0.png" -o "public/goswim.jpg"

echo "All images downloaded successfully!"
