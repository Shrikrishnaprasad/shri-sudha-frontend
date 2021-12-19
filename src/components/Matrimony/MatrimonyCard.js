import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import itesmage from "assets/img/bg2.jpg";
// import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CachedIcon from '@mui/icons-material/Cached';
import Chip from '@mui/material/Chip';

export default function MatrimonyCard() {
  return (
    <Card sx={{ border: "2px solid", borderRadius: "20px"}}>
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {/* <Grid item xs={12} textAlign="center">
            <Avatar alt="Remy Sharp" src={itesmage} sx={{ width: 72, height: 72 }}/>
        </Grid> */}
            <Grid item xs={12}>
              <Typography gutterBottom variant="h6" component="div">
                Ashwin Krishnan (1234)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Associate at cognizant
              </Typography>
              <Stack direction="row" spacing={1} style={{ padding: '12px 0', borderBottom: "1px solid" }}>
                <Chip label="Active" color="success" />
                <Chip label="Valid till 20/11/2021" color="secondary" />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                BE
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Height
              </Typography>
              <Typography variant="body2" color="text.secondary">
                170
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                DOB
              </Typography>
              <Typography variant="body2" color="text.secondary">
                27-10-1994
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Type
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Madhwa Kannada
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Gothram
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vasistha
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Star
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Poosam
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Contact
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Radha
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom component="div">
                Mobile
              </Typography>
              <Typography variant="body2" color="text.secondary">
                7871770456
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <Stack direction="row" spacing={2} width="100%">
          <Button variant="contained" color="error" startIcon={<DeleteIcon />} fullWidth>
            Delete
          </Button>
          <Button variant="contained" color="secondary" startIcon={<CachedIcon />} fullWidth>
            Renew
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}