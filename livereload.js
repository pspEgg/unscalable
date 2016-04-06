livereload = require('livereload');
server = livereload.createServer({ exts: ['jade'] });
server.watch([__dirname + "/assets", __dirname + "/src/jade"]);
