#!/bin/node
const fs = require("fs");

const environment = process.argv[2]

const environmentFileContent = require(`./environment.${environment}.json`);

fs.writeFileSync("environment.json", JSON.stringify(environmentFileContent, undefined, 2));