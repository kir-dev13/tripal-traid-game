const fs = require("fs");

const componentName = process.argv[2];

const folderPath = process.argv[3] ?? "components";

const path = `./src/${folderPath}/${componentName}`;

const componentTemplate = `import s from "./${componentName}.module.scss";

const ${componentName} = () => {
    return (
            <div className={s.root}>

            </div>
        )
};

export default ${componentName}`;

const indexTemplate = `import ${componentName} from "./${componentName}";

export default ${componentName}`;

const createComponent = new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
        reject("Component exists");
    }

    fs.mkdir(path, { recursive: true }, (err) => {
        if (err !== null) {
            reject(err);
        } else {
            resolve(path);
        }
    });
});

console.log(`>>> Start creating ${componentName}`);

createComponent
    .then(async (dirPath) => {
        await fs.writeFile(
            `${dirPath}/${componentName}.js`,
            componentTemplate,
            (err) => {
                if (err !== null) {
                    Promise.reject(err);
                }
            }
        );

        return dirPath;
    })
    .then(async (dirPath) => {
        await fs.writeFile(
            `${dirPath}/${componentName}.module.scss`,
            ".root {\n\n}",
            (err) => {
                if (err !== null) {
                    Promise.reject(err);
                }
            }
        );
        return dirPath;
    })
    .then(async (dirPath) => {
        await fs.writeFile(`${dirPath}/index.js`, indexTemplate, (err) => {
            if (err !== null) {
                Promise.reject(err);
            }
        });
    })
    .catch((err) => {
        console.log("THIS IS ERROR: ", err);
    });

console.log(`>>> Finish creating ${componentName}`);
