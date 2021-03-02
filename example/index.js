const basePath = './example';
const publicDirectoryPath = 'example';
const routePath = '/tree';
const port = 8082;

require('../index').runServer({
  basePath,
  publicDirectoryPath,
  routePath,
  port,
  skip: ['custom_ignore.md', 'a directory 01']
});