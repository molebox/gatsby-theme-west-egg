    
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");

/* Check that the folders used by source-filesystem plugin exist.
 * If they do not, they will be created.
 */

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, "blog/"),
    path.join(program.directory, "src/pages"),
    path.join(program.directory, "src/data"),
    path.join(program.directory, "src/images")
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};