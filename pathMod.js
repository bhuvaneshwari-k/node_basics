const path=require('path');
console.log('sep',path.sep);
console.log('basenme:',path.basename("/content/sample/new.txt",'.txt'));
console.log('delimeter:',path.delimiter);
console.log('dirname:',path.dirname("/content/sample/new.txt"));
console.log('extname:',path.extname("/content/sample/new.txt"));
console.log('format:',path.format("/content/sample/new.txt"));
