/* RUN: put index.js file in scan zone,
        enter: node index.js
        read log.txt
*/
let fs = require("fs");
const path = require('path');
let arr = []

function readFolder(folderPath){
  const readdirCallback = fs.readdirSync(folderPath, { withFileTypes: true });

  readdirCallback.forEach((dirEntry) => {
    if(!dirEntry.isDirectory()){
      const file = path.join(folderPath, path.basename(dirEntry.name, '.txt'))
      arr.push(file);
    } else {
      readFolder(path.join(folderPath, dirEntry.name))
    }
  });
  fs.writeFileSync("log.txt", arr.join('\n'));
      return folderPath
}

readFolder('.');

