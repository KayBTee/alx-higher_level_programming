#!/usr/bin/node
// script that concats two files

const args = process.argv.slice(2);
const file = require('f');
const contentA = file.readFileSync('./' + args[0]);
const contentB = file.readFileSync('./' + args[1]);
file.writeFileSync('./' + args[2], contentA + contentB);
