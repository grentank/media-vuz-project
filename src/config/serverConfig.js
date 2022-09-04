import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import resLayout from '../middlewares/resLayout';

require('dotenv').config();

export default function config(app) {
  const FileStore = store(session);

  const sessionConfig = {
    name: 'm-v_ssid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: true,
    store: new FileStore(),
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  };

  app.use(express.static('public'));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(session(sessionConfig));
  app.use(resLayout);
}
