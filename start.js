// eslint-disable-next-line
if (process.env.NODE_ENV === 'development') require('dotenv').config();
const run = require('npm-run-script');

const { PORT } = process.env;
const command = `micro -p ${PORT || 3000}`;
const child = run(command);

child.once('error', (error) => {
  console.trace(error);
  process.exit(1);
});
child.once('exit', (exitCode) => {
  console.trace('exit in', exitCode);
  process.exit(exitCode);
});
