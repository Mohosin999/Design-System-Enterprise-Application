const fs = require("fs");
const path = require("path");
const sass = require("sass");

// Akhon akta function create korbo jeta diye sob gulo file ke compile korbo

/**
 * Compile any scss file to css
 * @param {string} src source file
 * @param {string} output output file
 */
const compile = (src, output) => {
  const result = sass.compile(path.resolve(src), {
    style: "expanded",
    verbose: true,
  });

  fs.writeFileSync(path.resolve(output), result.css);
};

// compile the global css
compile("src/global.scss", "lib/global.css");

/**
 * Get all components from attoms, molecules and organisms
 * @returns Object[] returns array of object containing src and output
 */
const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules", "organisms"];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      src: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -5)}.css`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

// compile components
getComponents().forEach((component) =>
  compile(component.src, component.output)
);
