import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/components/slides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add referrerPolicy to imgs
  content = content.replace(/<img ([^>]+)>/g, (match, p1) => {
    if (!p1.includes('referrerPolicy')) {
      // Handle cases where the tag might end with /> or >
      if (p1.endsWith('/')) {
        return `<img ${p1.slice(0, -1)} referrerPolicy="no-referrer" />`;
      }
      return `<img ${p1} referrerPolicy="no-referrer" />`;
    }
    return match;
  });

  // Increase font sizes in Section
  content = content.replace(/text-2xl md:text-3xl/g, 'text-3xl md:text-4xl');
  content = content.replace(/text-lg leading-relaxed/g, 'text-xl md:text-2xl leading-relaxed');
  
  // Increase font sizes in Cover slides
  content = content.replace(/text-lg opacity-70/g, 'text-xl md:text-2xl opacity-80');
  content = content.replace(/text-2xl font-light/g, 'text-2xl md:text-4xl font-light');
  content = content.replace(/text-6xl md:text-8xl/g, 'text-5xl md:text-7xl lg:text-8xl');
  
  fs.writeFileSync(filePath, content);
}

console.log('Fixed images and text sizes');
