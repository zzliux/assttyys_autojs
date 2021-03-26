// # !/bin/bash
// tarpath=assttyys_ng

// if [ -e $tarpath ]; then
//     rm -r $tarpath
// fi

// mkdir -p $tarpath

// cp project.json $tarpath/project.json
// cp -r assets $tarpath/assets
// cp -r dist $tarpath/dist

const compressing = require('compressing');
const zipStream = new compressing.zip.Stream();
const fs = require('fs');

zipStream.addEntry('assets', { relativePath: 'assttyys_ng' });
zipStream.addEntry('dist', { relativePath: 'assttyys_ng' });
zipStream.addEntry('project.json', { relativePath: 'assttyys_ng/project.json' });
zipStream.pipe(fs.createWriteStream('assttyys_ng.zip'));
