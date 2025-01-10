const app = require('./src/app');
const port = 5000;

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});