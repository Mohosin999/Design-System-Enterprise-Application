const fs = require("fs");
const path = require("path");
const sass = require("sass");

// Akhon akta function create korbo jeta diye sob gulo file ke compile korbo
const compile = (src, output) => {
  const result = sass.compile(path.resolve(src), {
    style: "expanded",
    verbose: true,
  });

  fs.writeFileSync(path.resolve(output), result.css);
};

compile("src/global.scss", "lib/global.css");
