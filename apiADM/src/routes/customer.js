const express = require('express');
const router = express.Router();

const  customerController = require('../controllers/customerControllers');
//Controllers Obra
router.get('/', customerController.listO) ;
router.post('/addO', customerController.saveO);
router.get('/deleteO/:id', customerController.deleteO);
router.get('/updateO/:id', customerController.editO);
router.post('/updateO/:id', customerController.updateO);

//Controllers Contratante
router.get('/', customerController.listCon) ;
router.post('/addCon', customerController.saveCon);
router.get('/deleteCon/:id', customerController.deleteCon);
router.get('/updateCon/:id', customerController.editCon);
router.post('/updateCon/:id', customerController.updateCon);

//Controllers Presupuesto
router.get('/', customerController.listP) ;
router.post('/addP', customerController.saveP);
router.get('/deleteP/:id', customerController.deleteP);
router.get('/updateP/:id', customerController.editP);
router.post('/updateP/:id', customerController.updateP);

//Controllers Pagos
router.get('/', customerController.listPg) ;
router.post('/addPg', customerController.savePg);
router.get('/deletePg/:id', customerController.deletePg);
router.get('/updatePg/:id', customerController.editPg);
router.post('/updatePg/:id', customerController.updatePg);

//Controllers Usuario
router.get('/', customerController.listU) ;
router.post('/addU', customerController.saveU);
router.get('/deleteU/:id', customerController.deleteU);
router.get('/updateU/:id', customerController.editU);
router.post('/updateU/:id', customerController.updateU);


module.exports = router;