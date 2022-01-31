// Node integruotas modulis dirbti su file system
const fs = require('fs');

function writeFile(title) {
  fs.writeFile(title, 'Username=James', (err) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log('naujas.txt sukurtas');
  });
}

function readOurFile() {
  fs.readFile('naujas.txt', (err, data) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log(data.toString());
  });
}

// writeFile('dar vienas.txt');
readOurFile();
