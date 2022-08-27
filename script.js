import readFile from 'fs';

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFile(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}

syncReadFile('./login.txt');
