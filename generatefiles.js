const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src/icons');
const outputDir = path.join(__dirname, 'src/components');

const svgFiles = [
  'Fiaddress.svg',
  'Fibank.svg',
  'Fibusiness.svg',
  'Ficalendar.svg',
  'Ficellphone.svg',
  'FicolumnChart.svg',
  'Ficompany.svg',
  'Ficomputer.svg',
  'Ficonversation.svg',
  'Ficreativity.svg',
  'Fidocument.svg',
  'Fimail.svg',
  'Finetwork.svg',
  'Finotify.svg',
  'Fiphoto.svg',
  'FipieChart.svg',
  'FisetUp.svg',
  'FithumbsUp.svg',
  'Fitrophy.svg',
  'Fiupload.svg',
  'Fiuser.svg'
];

const generateComponent = (filename) => {
  const componentName = path.basename(filename, '.svg') + 'Icon';
  return `
import React from 'react';
import { ReactComponent as ${componentName}Svg } from '../icons/${filename}';

const ${componentName} = (props) => (
  <${componentName}Svg {...props} />
);

export default ${componentName};
  `.trim();
};

const generateComponents = () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  svgFiles.forEach(file => {
    const componentCode = generateComponent(file);
    const componentName = path.basename(file, '.svg') + 'Icon';
    fs.writeFileSync(
      path.join(outputDir, `${componentName}.js`),
      componentCode
    );
  });

  console.log('Components generated successfully.');
};

generateComponents();
