const church = require('express').Router();

// const churchController = require('../../controllers/church/index.js');

church.post('/create', churchController.create);
church.get('/list', churchController.list);
church.get('/get/:id', churchController.get);
church.put('/update/:id', churchController.update);
church.delete('/delete/:id', churchController.delete);
