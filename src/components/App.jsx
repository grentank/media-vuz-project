import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

export default function App({ jsonSheet }) {
  useEffect(() => {
    console.log(jsonSheet);
  });
  return (
    <Typography>App</Typography>
  );
}
