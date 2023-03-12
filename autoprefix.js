const fs = require('fs');
const path = require('path');
const glob = require('glob');

const rootDir = 'shell\\src';
const prefix = 'an-';
const targetFiles = 'js,jsx,tsx,vue,html';
const classIdentifier = 'class';
// const classNameRegex = /class=\["'\](\[\w\s-\]+)\["'\]/g;

const classNameRegex = new RegExp(
  `${classIdentifier}=` + '["\']([\\w\\s-:]+)["\']',
  'g'
);

glob(`**/*.{${targetFiles}}`, { cwd: rootDir }, (er, files) => {
  files.forEach(file => {
    const filePath = path.join(rootDir, file);
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const result = data.replace(classNameRegex, (match, p1) => {
        const classNames = p1.split(' ');
        const prefixedClassNames = classNames.map(className => {
          if (className.startsWith(prefix)) {
            return className;
          } else {
            const psuedoList = [
              'dark',
              'md',
              'sm',
              'hover',
              'group-hover',
              'focus',
              'active',
              'disabled',
              'checked',
            ];
            const prefixedClass = `${prefix}${className}`;
            if (className.includes(':')) {
              const psuedoClasses = className.split(':');
              const parsedPsuedoClasses = psuedoClasses.map(psuedoClass => {
                if (!psuedoClass) return psuedoClass;

                if (psuedoList.includes(psuedoClass)) {
                  return psuedoClass;
                } else {
                  return `${prefix}${psuedoClass}`;
                }
              });
              return parsedPsuedoClasses.join(':');
            }
            return prefixedClass;
          }
        });
        return `${classIdentifier}="${prefixedClassNames.join(' ')}"`;
      });
      fs.writeFile(filePath, result, 'utf-8', err => {
        if (err) console.error(err);
      });
    });
  });
});
