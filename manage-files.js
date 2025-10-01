#!/usr/bin/env node

/**
 * File Management Script for AI Journal Club
 * 
 * This script helps sync the actual file presence with the localStorage state.
 * Run this to check which files exist and update the localStorage accordingly.
 * 
 * Usage:
 *   node manage-files.js [command]
 * 
 * Commands:
 *   check     - Check which PDF files exist
 *   sync      - Sync localStorage with actual files (for development)
 *   list      - List all expected files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEEKS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const PDF_DIR = path.join(__dirname, 'public', 'pdfs');

function checkPDFFiles() {
  console.log('📁 Checking PDF files...\n');
  
  const results = WEEKS.map(week => {
    const filePath = path.join(PDF_DIR, `week${week}.pdf`);
    const exists = fs.existsSync(filePath);
    
    return {
      week,
      file: `week${week}.pdf`,
      exists,
      path: filePath
    };
  });

  results.forEach(({ week, file, exists }) => {
    const status = exists ? '✅' : '❌';
    console.log(`${status} Week ${week}: ${file}`);
  });

  const existingCount = results.filter(r => r.exists).length;
  console.log(`\n📊 Summary: ${existingCount}/${WEEKS.length} PDF files exist`);
  
  return results;
}

function listExpectedFiles() {
  console.log('📋 Expected PDF files:\n');
  
  WEEKS.forEach(week => {
    console.log(`📄 week${week}.pdf - Week ${week}${week === 0 ? ' (Orientation)' : ''}`);
  });
  
  console.log(`\n📁 Files should be placed in: ${PDF_DIR}`);
}

function generateSyncInstructions(results) {
  console.log('\n🔧 To sync your development environment:');
  console.log('1. Open the admin page in your browser');
  console.log('2. Use the following localStorage commands in browser console:\n');
  
  results.forEach(({ week, exists }) => {
    if (exists) {
      console.log(`localStorage.setItem('pdf_week_${week}', 'uploaded');`);
    }
  });
  
  console.log('\n3. Refresh the main page to see the changes');
}

function main() {
  const command = process.argv[2] || 'check';
  
  console.log('🎓 AI Journal Club - File Management\n');
  
  switch (command) {
    case 'check':
      const results = checkPDFFiles();
      generateSyncInstructions(results);
      break;
      
    case 'list':
      listExpectedFiles();
      break;
      
    case 'sync':
      console.log('💡 For a static site, localStorage sync must be done manually in the browser.');
      console.log('Use the "check" command to see the localStorage commands needed.');
      break;
      
    default:
      console.log('❓ Unknown command. Available commands: check, list, sync');
      break;
  }
}

// Ensure PDF directory exists
if (!fs.existsSync(PDF_DIR)) {
  fs.mkdirSync(PDF_DIR, { recursive: true });
}

main();