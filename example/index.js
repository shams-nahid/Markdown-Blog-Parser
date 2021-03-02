const basePath = './example/public';
const publicDirectoryPath = 'example/public';
const routePath = '/tree';
const port = 8082;

require('../index').runServer({
  basePath,
  publicDirectoryPath,
  routePath,
  port
});