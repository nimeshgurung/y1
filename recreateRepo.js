#!/usr/bin/env node
/**
 * Script to recreate the repository from a merged source file (source.txt) using Node.js.
 *
 * This script reads the merged "source.txt" file and splits it into separate files based on markers,
 * then creates the necessary directories and writes each file's content.
 *
 * Expected format in source.txt:
 * -------------------------------------------------
 * Sections separated by lines of "===" and with sections starting with "File: path/to/file"
 * followed by the file's content.
 * -------------------------------------------------
 *
 * Usage:
 *     node recreateRepo.js
 */

const fs = require('fs');
const path = require('path');

const sourceFile = 'source.txt';
if (!fs.existsSync(sourceFile)) {
  console.error(`Source file "${sourceFile}" not found.`);
  process.exit(1);
}

const content = fs.readFileSync(sourceFile, 'utf8');

// Split the content into sections using regex with a capturing group.
// The regex looks for lines starting with one or more '=' characters, followed by optional whitespace, then 'File:', then the file path.
const sections = content.split(/^=+\s*File:\s*(.*?)\s*$/m);

if (sections.length < 3) {
  console.error('No file sections found in the source file.');
  process.exit(1);
}

// sections[0] is the content before the first file section.
// Then sections are in pairs: [filePath, fileContent, filePath, fileContent, ...]
for (let i = 1; i < sections.length; i += 2) {
  const filePath = sections[i].trim();
  let fileContent = sections[i + 1].trim();

  // If the file content is empty, treat filePath as a directory and create it.
  if (!fileContent) {
    try {
      fs.mkdirSync(filePath, { recursive: true });
      console.log(`Created directory: ${filePath}`);
    } catch (err) {
      console.error(`Failed to create directory ${filePath}:`, err);
    }
    continue;
  }

  // Remove any isolated separator lines (lines containing only '=' characters) from file content
  fileContent = fileContent.replace(/^=+\s*$/gm, '').trim();

  // Ensure the directory for the file exists
  const dirPath = path.dirname(filePath);
  if (dirPath && !fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
    } catch (err) {
      console.error(`Failed to create directory ${dirPath}:`, err);
      continue;
    }
  }

  fs.writeFileSync(filePath, fileContent);
  console.log(`Created file: ${filePath}`);
}