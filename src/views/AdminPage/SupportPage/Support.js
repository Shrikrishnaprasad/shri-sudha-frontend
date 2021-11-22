import MatrimonyCard from 'components/Matrimony/MatrimonyCard';
import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Support(){
  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        <Grid item xs={12} md={1} lg={3}>
          <MatrimonyCard/ >
        </Grid>
        <Grid item xs={12} md={8} lg={3}>
          <MatrimonyCard/ >
        </Grid>
        <Grid item xs={12} md={8} lg={3}>
          <MatrimonyCard/ >
        </Grid>
        <Grid item xs={12} md={8} lg={3}>
          <MatrimonyCard/ >
        </Grid>
        <Grid item xs={12} md={8} lg={3}>
          <MatrimonyCard/ >
        </Grid>
        <Grid item xs={12} md={8} lg={3}>
          <MatrimonyCard/ >
        </Grid>
        <Grid item xs={12} md={8} lg={3}>
          <MatrimonyCard/ >
        </Grid>
      </Grid>
    </div>
  )
}