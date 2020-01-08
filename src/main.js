const list = require("./elements.path.json");

function getPaths() {
  return list.map(item => item.path);
}

export default getPaths();
