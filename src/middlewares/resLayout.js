import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';

export default function resLayout(req, res, next) {
  res.layout = (initState) => {
    const layoutComponent = React.createElement(
      Layout,
      { initState: { ...initState, path: req.originalUrl } },
    );
    const html = renderToString(layoutComponent);
    res.write('<!DOCTYPE html>');
    res.end(html);
  };
  next();
}
