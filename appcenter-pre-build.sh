#!/usr/bin/env bash

# Install Jest dependency
npm install --save-dev jest

# Run tests
npm run test-ci

# Check if all tests passed
if [ $? -eq 0 ]; then
  # Exit with code 0 to indicate successful build
  echo "Tests Passed."
  exit 0
else
  # Exit with code 1 to indicate failed build
   echo "Tests failed. Skipping the build."
   exit 1

fi
