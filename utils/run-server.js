const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { parseMarkdownTree } = require('./parse-markdown-tree');

const runServer = ({
  basePath = './',
  publicDirectoryPath = '/',
  routePath = '/tree',
  port = 8081,
  skip = []
}) => {
  const app = express();

  app.use(express.static(publicDirectoryPath));
  app.use(cors());
  app.use(morgan('combined'));

  app.get(routePath, (req, res) => {
    parseMarkdownTree(basePath, skip, result => {
      return res.json(result);
    });
  });

  app.listen(port, () => console.log(`App is listening on port ${port}`));
};

module.exports = {
  runServer,
};