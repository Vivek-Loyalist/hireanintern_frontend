import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { baseURL } from '../baseURL';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Hire an Intern
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();



export default function SignUp() {

  // using state for sending to backend

  const [job_title, setJobTitle] = React.useState('');
  const [company_name, setCompanyName] = React.useState('');
  const [job_location, setJobLocation] = React.useState("");
  const [job_description, setJobDescription] = React.useState("");
  const [image_source, setImageSource] = React.useState("");
  const [sucessMsg, setSucessMsg] = React.useState(false);




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  const onSignUp = async () => {
    //Write authentication code here
    const data = {
      job_title: job_title,
      company_name: company_name,
      job_location: job_location,
      job_description: job_description,
      image_source:image_source,
    }
    try {
      const response = await axios.post(`${baseURL}/job/jobdetails`, data);
      if (response.status === 201) {
        setSucessMsg(true);
      }
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <>
      <ThemeProvider theme={defaultTheme}>
      
      <Container component="main" maxWidth="xs">
      
      
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* An avator icon is required something like below */}

            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Post A Job
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>


            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="job_tittle"
                  label="Job Tittle"
                  name="job_tittle"
                  value={job_title}
                  onChange={(e) => setJobTitle(e.target.value)}
                  autoComplete="job_tittle"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="company_name"
                  label="Company "
                  name="company_name"
                  value={company_name}
                  onChange={(e) => setCompanyName(e.target.value)}
                  autoComplete="company_name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="job_location"
                  label="Job Location"
                  name="job_location"
                  value={job_location}
                  onChange={(e) => setJobLocation(e.target.value)}
                  autoComplete="job_location"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="job_description"
                  label="Job Description"
                  name="job_description"
                  value={job_description}
                  onChange={(e) => setJobDescription(e.target.value)}
                  autoComplete="job_description"
                />
              </Grid>
              <Grid item xs={12} sm={20}>
                <TextField
                  required
                  fullWidth
                  name="image_source"
                  label="Image Source"
                  type="Link"
                  value={image_source}
                  onChange={(e) => setImageSource(e.target.value)}
                  id="image_source"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
            onClick={() => {onSignUp()}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post Job
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

  {/* To add alert message */}

    <Snackbar open={sucessMsg} autoHideDuration={6000} >
    <Alert  severity="success" sx={{ width: '100%' }}>
      Job Successfully posted!
    </Alert>
    </Snackbar>
    </>
  );
}