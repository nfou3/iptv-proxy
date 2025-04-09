#!/bin/bash

# Navigate to the project directory (if needed)
# Uncomment the line below and specify the path if the script is not in the project folder
# cd /path/to/your/project

# Install dependencies using npm
echo "Installing dependencies..."
npm install express axios

# Check if the installation was successful
if [ $? -eq 0 ]; then
    echo "Dependencies installed successfully."
else
    echo "Error: Failed to install dependencies. Exiting..."
    exit 1
fi