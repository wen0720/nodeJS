const chalk = require('chalk')
console.log(chalk.bgGreen.black('success'))
console.log(chalk.green.bold('success'))
console.log(chalk.blue('Hello') + 'world' + chalk.red('!'))
console.log(`
  CPU: {${chalk.red('100')}%}
`)