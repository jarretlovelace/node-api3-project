const server = require('./server');

const PORT = 9000;

server.listen(PORT, () => {
  console.log('Listening on', PORT);
});
