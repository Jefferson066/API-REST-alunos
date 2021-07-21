import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
  console.log(`CTRL + click em http://localhost:${port}`);
});
