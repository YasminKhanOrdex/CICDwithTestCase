#!/usr/bin/env bash

# Install Jest dependency
npm install --save-dev jest

# Run tests
npm run test-ci

# Check if all tests passed
if [ $? -eq 0 ]; then
  # Build the app
  npm run build
else
  echo "Tests failed. Skipping the build."
fi
