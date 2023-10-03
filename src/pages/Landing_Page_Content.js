import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import figma from "../images/figma.png";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Landing_Page_Conetnt() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      {/* Figma picture grid */}

      <Grid container spacing={2}>
        <Grid item xs={5}>
          <item>
          <img  src={figma} alt="figma" />
          </item>
        </Grid>

        {/* Text Grid */}
        <Grid  style={{display:"flex", alignItems:"center"}}item xs={7}>
          <div>
            <item>
            <h1>HI! WE MAKE YOUR INTERN</h1>
            <h1>MATCH</h1>
            <h4>Unlock your Professional Journey</h4>
            <h5>with Hire an Intern</h5>
            </item>
            

            {/* Buttons in landing page */}

            <div>
            <ButtonGroup variant="text" size="large" aria-label="text button group">
                <Button  onClick={() => navigate('/login/employer')}>EMPLOYER</Button>
                <Button onClick={()=>navigate('/login/intern')}>INTERN</Button>
    
            </ButtonGroup>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}