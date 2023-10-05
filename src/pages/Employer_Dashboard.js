import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Indeed from "../images/Indeed.png";
import Indeed2 from "../images/Indeed2.mp4";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";


// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Employer_Dashboard() {
  //   const navigate = useNavigate();

  // To use navigate function
  const navigate = useNavigate();


  return (

    <div>
      <h1>Employer Dashboard</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid style={{ width: '50%' }} item xs={6} >
            <item>
              <video width="100%" height="100%" controls>
                <source src={Indeed2} type="video/mp4" />

              {/* <img src={Indeed2} alt="Indeed2" /> */}

              </video>
            </item>


          </Grid>


          {/* For text grid  */}


          <Grid style={{ display: "flex", alignItems: "center", boxShadow: 'none' }} item xs={6} >
            <div>

              <div>
                <h1>Let's make your next great hire. Fast</h1>
                <h5>Save time and effort in your hiring journey. Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</h5>

              </div>

              <div>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button style={{margin: 10}}  onClick={() => navigate('/employer/postjob')}>Post A Job</Button>
                  <Button style={{margin: 10}}>Find Applicants</Button>
                </ButtonGroup>
              </div>

            </div>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}