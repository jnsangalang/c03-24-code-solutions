import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  console.log('The date is', new Date(), req.method, req.path);
  console.log('/ is the path');
  res.send('/ is the path');
});
app.get('/notes', (req, res) => {
  console.log('The date is', new Date(), req.method, req.path);
  console.log('notes is the path');
  res.send('notes is the path');
});
app.post('/notes/123', (req, res) => {
  console.log('The date is', new Date(), req.method, req.path);
  console.log('/notes/123 is the path');
  res.send('/notes/123 is the path');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
