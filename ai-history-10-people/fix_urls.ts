import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/components/slides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace wikimedia urls with wsrv.nl proxy
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/([^"']+)/g, (match, p1) => {
    return `https://wsrv.nl/?url=upload.wikimedia.org/${p1}`;
  });

  fs.writeFileSync(filePath, content);
}

console.log('Fixed wikimedia urls');
