var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json' wj8WpfSDL4
, 'utf8'))

delete pkg.scripts.postinstall

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
