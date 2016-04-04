'use strict';

import express from 'express';
import multer from 'multer';
import UserCtrl from '../controllers';
let router = express.Router();
let User = new UserCtrl();
let upload = multer({dest: 'uploads/'});

router.get('/', (req, res) => res.send({status:'Ok', message:'Hola mundo'}));
router.get('/users',            User.getAll);
router.post('/users',           upload.single('avatar'), User.add);
router.get('/users/:userId',    User.get);
router.put('/users/:userId',    User.update);
router.delete('/users/:userId', User.delete);
router.param('userId',          User.findUser);

export default router;
