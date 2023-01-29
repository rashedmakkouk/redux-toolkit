/* eslint-disable @typescript-eslint/no-var-requires */
const { rm } = require('shelljs');

const buildDir = './lib';

rm('tsconfig.tsbuildinfo');

rm('-rf', `${buildDir}/*`);
