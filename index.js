const express = require('express');
const routes = require('./routes/index.route');


const app = express();


app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


app.use(routes);


// app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[SERVIDOR] clinica operando em http://localhost:${PORT}`);
});