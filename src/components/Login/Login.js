import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';

export default function Login() {
  const paperStyle = {padding: 48, width: 310, margin: '20px'};
  return(
    <Grid container spacing={0} align='center' justify='center' direction='column'>
      <Grid item>
        <Paper elevation={10} style={paperStyle}>

          <Avatar></Avatar>
          <h2>Iniciar Sesión</h2>

          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <TextField id="user" label="Usuario" variant="outlined" fullWidth required autoFocus/>
            </Grid>
            <Grid item>
              <TextField id="password" label="Contraseña" variant="outlined" fullWidth required/>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" fullWidth>
                Acceder
              </Button>
            </Grid>
            <Grid item align="left">
              <FormControlLabel
                control={
                  <Checkbox name="remember"/>
                }
                label="Remember me"
              />
            </Grid>
          </Grid>

        </Paper>
      </Grid>
    </Grid>
  )
}