'use strict';
import _ from 'lodash';
import User from '../models';

class UserCtrl {
  getAll (req, res) {
    User.find()
      .then((users) => {
        if (!users.length) return res.status(404).send({
          status: 404,
          message: 'Not Found',
          error: 'No hay usuarios guardados'
        });

        res.send(users);
      })
      .catch((err) => {
        res.status(400).send({
          status: 400,
          message: 'Error',
          error: err
        });
      });
  }

  add (req, res) {
    let user = new User(req.body);

    user.save((err,userSaved) => {
      if (err) return res.status(409).send({
        status: 409,
        message: 'Conflict',
        error: `el email ${req.body.email} pertenece a otro usuario`
      });

      res.status(201).send(userSaved);
    });
  }

  get (req, res) {
    res.send(req.user);
  }

  update (req, res) {
    let user = _.extend(req.user, req.body);

    user.save((err, userUpdated) => {
      if (err) return res.status(400).send({
        status: 400,
        message: 'Error',
        error: err
      });

      res.status(200).send(userUpdated);
    });
  }

  delete (req, res) {
    let user = req.user;
    user.remove((err) => {
      if (!err) return res.send({message: 'Usuario eliminado exitosamente'});
    });
  }

  findUser (req, res, next, id) {
    User.findById(id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(() => {
      res.status(404).send({
        status: 404,
        message: 'Not Found',
        error: `No se encuentra usuario con id ${id}`
      });
    });
  }
}

export default UserCtrl;
