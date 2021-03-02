const fs = require('fs');
const DirectoryStructureJSON = require('directory-structure-json');

const { structureFormatter } = require('./structure-formatter');

const parseMarkdownTree = (basePath, skip, cb) => DirectoryStructureJSON.getStructure(
  fs,
  basePath,
  function (err, structure) {
    if (err) console.log(err);
    return cb(structureFormatter({
      structure,
      basePath,
      skip
    }));
  }
);
module.exports = {
  parseMarkdownTree
};
