import { Container, CssBaseline, Grid, Typography } from '@mui/material';

export const Text = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{ height: '100vh', border: '1px solid #9eff49' }}
        >
          <Grid item container maxWidth='70vw'>
            <Grid
              item
              xs={6}
              sx={{
                border: '1px solid grey',
                height: 600,
                backgroundColor: '#d6fff9',
              }}
            >
              <Typography variant='h2'>Welcome To</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                border: '1px solid grey',
                height: 600,
                backgroundColor: '#e481ff',
              }}
            >
              <Typography variant='h2'>Алексей</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
