const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

// 接受所有类型请求
app.all('/download', function (req, res) {
  fs.readFile(path.join(__dirname, 'files/test.txt'), function(isErr, data) {  
    if (isErr) {
      res.end("Read file failed!");
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream', // 告诉浏览器这是一个二进制文件
      'Content-Disposition': `attachment;${req.query.name ? ` filename=${req.query.name}` : ''}`, // 告诉浏览器这是一个需要下载的文件
    });
    res.end(data);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});