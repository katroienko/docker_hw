import os from 'os';
import cowsay from 'cowsay';

const info = `
  OS Type: ${os.type()}
  OS Platform: ${os.platform()}
  OS Release: ${os.release()}
  CPU Architecture: ${os.arch()}
`;

console.log(cowsay.say({
  text: info,
  e: "oO",
  T: "U "
}));
