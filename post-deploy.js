const fse = require('fs-extra');
const projectFolder = 'docs';
const buildFolder = 'build';

fse.rmdir(projectFolder, { recursive: true } ,(err) => {
  !!err ? console.log(err) : console.log('Project Folder Deleted');
  
  fse.moveSync(buildFolder, projectFolder, (err) => !!err ? console.log(err) : console.log('Project Folder Created'));
});