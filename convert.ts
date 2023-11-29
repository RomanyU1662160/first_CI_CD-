import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

const convertFile = () => {
  const inputFile = path.join(__dirname, 'input.yaml');
  const outputFile = path.join(__dirname, 'output.json');

  const json = yaml.load(fs.readFileSync(inputFile, 'utf8'));
  console.log('json:::>>>', json);

  fs.writeFileSync(outputFile, JSON.stringify(json, null, 2));
};

convertFile();
