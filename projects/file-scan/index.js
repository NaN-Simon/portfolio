/* RUN: put index.js file in scan zone,
        enter: node index.js
*/
let fs = require("fs");
const path = require('path');
function readFolder(folderPath){
  const readdirCallback = fs.readdirSync(folderPath, { withFileTypes: true });

  readdirCallback.forEach((dirEntry) => {
    if(!dirEntry.isDirectory()){
      console.log(path.join(folderPath, path.basename(dirEntry.name, '.txt')))
    } else {
          readFolder(path.join(folderPath, dirEntry.name))
        }
      });
      return folderPath
}


// readFolder(path.resolve('..'));
readFolder('.');

