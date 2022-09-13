import React from 'react';
import { renderToString } from 'react-dom/server';

export default async function jsxRender(pathToFile, initState, cb) {
  const Layout = await import(pathToFile);
  const html = renderToString(React.createElement(Layout.default, { initState }));
  return cb(null, `<!DOCTYPE html>${html}`);
}
