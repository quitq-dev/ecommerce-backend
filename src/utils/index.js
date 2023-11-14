const lodash = require("lodash");

const getInfoData = ({ object = {}, fields = [] }) => {
  return lodash.pick(object, fields);
};

module.exports = {
  getInfoData,
};
