const fs = require('fs');

// Step 1: Read the en.json file
const translationData = JSON.parse(fs.readFileSync('./db/kor.json', 'utf8'));

// Step 2: Read the index.template.html file
const template = fs.readFileSync('index.template.html', 'utf8');

// Step 3: Find and replace the template directives
let localizedHTML = template;
for (const key in translationData) {
  const placeholder = `{{${key}}}`;
  const translation = translationData[key];
  localizedHTML = localizedHTML.split(placeholder).join(translation);
}

// Step 4: Save the result as /en-us/index.html
fs.writeFileSync('./dist/ko-kr.index.html', localizedHTML, 'utf8');

console.log('Localization complete!');
