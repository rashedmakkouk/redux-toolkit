import { cp, exec, mkdir, rm, test } from 'shelljs';

const target = 'c:/npm/@limo/redux-toolkit';

rm('-rf', './build/*');

exec('tsc --build');

if (test('-d', target)) {
  rm('-rf', `${target}/*`);
}

mkdir('-p', `${target}/lib`);

const metadataFiles = ['./package.json', './yarn.lock', 'README.md', 'LICENSE'];

cp('-r', metadataFiles, target);

cp('-r', './build/*', `${target}/lib`);
