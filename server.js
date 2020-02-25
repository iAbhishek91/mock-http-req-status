const Express = require('express');

const PORT = 1221;

global.REQ_COUNT = 0;
const NUMBER_OF_200 = 3;
const IS_RANDOM = false;


const app = Express();


app.get('/', (_, res) => {
  REQ_COUNT += 1;

  // first two request is always 200
  if ( REQ_COUNT <= 2 ) {
    res.status(200).send('200');
  } else if ( IS_RANDOM ) {
    (Math.round(Math.random() * 10) % 2) ? res.status(200).send('200') : res.status(400).send('400');
  } else if ( REQ_COUNT <= NUMBER_OF_200 ) {
    res.status(200).send('200');
  } else {
    res.status(400).send('400');
  }
});


app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
