const fs = require('fs');
const handlebars = require('handlebars');

const source = fs.readFileSync(`${__dirname}/template.hbs`, 'utf-8');
const template = handlebars.compile(source);

module.exports = data => template(data);
