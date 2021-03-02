const fs = require('fs');

const {FILE_TYPE, FOLDER_TYPE} = require('../constants')

const structureFormatter = (structure = [], parentPath = '', basePath) => {
  if (!Array.isArray(structure)) {
    return;
  }
  return structure
  .filter(node => {
    const ignorePattern = /^.ignore/i;
    const shouldIgnore = ignorePattern.test(node?.name);
    return !shouldIgnore;
  })
  .sort((node1, node2) => node1.name > node2.name ? 1 : -1)
  .map(node => {
    const { type, name, children } = node;
    let formattedChildren = null;
    let formattedFileName = name;

    if (type === FOLDER_TYPE) {
      formattedChildren = structureFormatter(
        children,
        [parentPath, name].join('/')
      );
    }

    if (type === FILE_TYPE) {
      formattedFileName = formattedFileName.replace('.md', '');
    }

    const path = [parentPath, name].join('/');
    return {
      type,
      name: formattedFileName,
      children: formattedChildren,
      path,
      content:
        type === FILE_TYPE
          ? fs.readFileSync([basePath, path].join(''), 'utf8')
          : ''
    };
  });
}

module.exports = {
  structureFormatter
};
