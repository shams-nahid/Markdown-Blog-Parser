const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { parseMarkdownTree } = require('./parse-markdown-tree');

const runServer = ({
  basePath = './public',
  publicDirectoryPath = 'public',
  routePath = '/tree',
  port = 8081
}) => {
  const app = express();

  app.use(express.static(publicDirectoryPath));
  app.use(cors());
  app.use(morgan('combined'));

  app.get(routePath, (req, res) => {
    parseMarkdownTree(basePath, result => {
      return res.json(result);
    });
  });

  app.listen(port, () => console.log(`App is listening on port ${port}`));
};

module.exports = {
  runServer
};