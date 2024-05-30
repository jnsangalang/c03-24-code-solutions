import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  res.send('potato');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
