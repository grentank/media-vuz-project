import {
  Box, CircularProgress, Grid, Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowPage({ oneLocation }) {
  const [item, setItem] = useState(oneLocation || null);
  const { inventory } = useParams();

  useEffect(() => {
    if (!window.initState) {
      axios(`/api/v1/show/${inventory}`)
        .then((res) => setItem(res.data))
        .catch(console.log);
    } else delete window.initState;
  });

  return (
    <Box
      sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {item ? (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">
              {item.vuz}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Адрес:&nbsp;
              {item.adress}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Расположение носителя:&nbsp;
              {item.location}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Размер:&nbsp;
              {item.size}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Инвентарный номер:&nbsp;
              {item.inventory}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/img/placeholder.png" style={{ width: '60%' }} alt="placehodler" />
          </Grid>
        </Grid>
      ) : <CircularProgress />}
    </Box>
  );
}
