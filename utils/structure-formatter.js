const fs = require('fs');

const { FILE_TYPE, FOLDER_TYPE } = require('../constants')

const structureFormatter = ({
  structure = [],
  basePath,
  skip = []
}) => {
  if (!Array.isArray(structure)) {
    return;
  }
  return structure
  .filter(node => {
    const ignorePattern = /^.ignore|.js$/i;
    const shouldIgnore = ignorePattern.test(node?.name) || skip.includes(node?.name);
    return !shouldIgnore;
  })
  .sort((node1, node2) => node1.name > node2.name ? 1 : -1)
  .map(node => {
    const { type, name, children } = node;
    let formattedChildren = null;
    let formattedFileName = name;

    if (type === FOLDER_TYPE) {
      formattedChildren = structureFormatter({
        structure: children,
        basePath: [basePath, name].join('/'),
        skip
      });
    }

    if (type === FILE_TYPE) {
      formattedFileName = formattedFileName.replace('.md', '');
    }

    const path = [basePath, name].join('/');
    return {
      type,
      name: formattedFileName,
      children: formattedChildren,
      path,
      content:
        type === FILE_TYPE
          ? fs.readFileSync(path, 'utf8')
          : ''
    };
  });
}

module.exports = {
  structureFormatter
};
