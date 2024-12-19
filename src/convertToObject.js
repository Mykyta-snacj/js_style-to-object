'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.replaceAll('\n', ' ').split(';');
  const stylesObject = {};
  const filtredStylesList = stylesList.filter((val) => val.trim().length > 0);

  for (let i = 0; i < filtredStylesList.length; i++) {
    filtredStylesList[i] = filtredStylesList[i].split(':');
    filtredStylesList[i][0] = filtredStylesList[i][0].trim();
    filtredStylesList[i][1] = filtredStylesList[i][1].trim();
    filtredStylesList[i][1] = filtredStylesList[i][1].replaceAll(', ', ',\n');
    stylesObject[filtredStylesList[i][0]] = filtredStylesList[i][1];
  }

  return stylesObject;
}

module.exports = convertToObject;
