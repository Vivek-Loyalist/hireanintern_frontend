import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { on } from 'events';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { baseURL } from '../baseURL';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignInSide() {


  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // For navigation
  // const navigate = useNavigate();

  // authentification and calling backend using axios post method

  const onSignin = async () => {
    //Write authentication code here
    // naviagte to intern dashboard.
    const data = {
      email: email,
      password: password
    }
    try {
      const response = await axios.post(`${baseURL}/intern/login`, data);
      if (response.status === 200) {
        // navigate("/intern/dashboard");
        window.location.href = "/intern/dashboard";
      }
    } catch (error) {
      setErrorMsg(true);
      console.error(error);
    }
  }


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
              backgroundImage: 'url(https://www3.recruiter.com/recruiting/wp-content/uploads/2022/07/ai-based-resume-screening.jpg)',

              // backgroundRepeat: 'no-repeat',


              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

              </Avatar>
              <Typography component="h1" variant="h5">
                Intern Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // from here used for authentification
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // from here used for authentification
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  onClick={() => onSignin()}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}

                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link href="http://localhost:3000/" variant="body2">
                      Forgot password?
                    </Link> */}
                  </Grid>
                  <Grid item>
                    <Link href="/signup/intern" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Snackbar open={errorMsg} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Login Unsuccessful Check your details!
        </Alert>
      </Snackbar>
    </>
  );
}


export default function Intern_Login_Page(props) {
  return (
    <div className='App'>
      <SignInSide />
    </div>
  )
}




