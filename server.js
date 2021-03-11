const Express = require('express');

const PORT = 1221;

global.REQ_COUNT = 0;

const NUMBER_OF_200 = process.env.NUMBER_OF_200;
// 3
// process.argv[2]
// process.env.NUMBER_OF_200

const IS_RANDOM = false;


const app = Express();


app.get('/', (_, res) => {
  REQ_COUNT += 1;

  // reset REQ_COUNT
  if (REQ_COUNT === 12) {
    REQ_COUNT = 0
  }

  console.log('req count: ' + REQ_COUNT);
  // first two request is always 200
  if ( REQ_COUNT % 2 ) {
    res.status(200).send('200');
    console.log('passed');
  } else {
    res.status(400).send('400');
    console.log('Fail');
  }
});


app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
