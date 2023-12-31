// import React, { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import { useNavigate, useParams } from 'react-router-dom';
// import videoSource from '../images/Indeed2.mp4';
// import axios from 'axios';

// const VideoBackground = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   width: '100vw',
//   height: '100vh',
//   '& video': {
//     objectFit: 'cover',
//     width: '100%',
//     height: '100%',
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     zIndex: '-1',
//   },
// }));

// const ContentBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   height: '100%',
//   color: '#fff',
// }));

// export default function EmployerDashboard() {
//   const navigate = useNavigate();
//   const { email } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     console.log('Email that is passed from login page:', email);
    
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/job/company_name/${email}`);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (email) {
//       fetchData();
//     }
//   }, [email]);

//   return (
//     <div>
//       <VideoBackground>
//         <video autoPlay loop muted>
//           <source src={videoSource} type="video/mp4" />
//         </video>
//         <ContentBox>
//           <div>
//             <h1>Let's make your next great hire. Fast</h1>
//             <h5>Save time and effort in your hiring journey. Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</h5>
//             <ButtonGroup
//               disableElevation
//               variant="contained"
//               aria-label="Disabled elevation buttons"
//               style={{ display: 'flex', justifyContent: 'center' }}
//             >
//               <Button style={{ margin: 10 }} onClick={() => navigate('/employer/postjob')}>
//                 Post A Job
//               </Button>
//               <Button style={{ margin: 10 }}>Find Applicants</Button>
//             </ButtonGroup>
            
//           </div>
//         </ContentBox>
//       </VideoBackground>
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate, useParams } from 'react-router-dom';
import videoSource from '../images/Indeed2.mp4';
import axios from 'axios';

const VideoBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  '& video': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '-1',
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100%',
  color: '#fff',
}));

export default function EmployerDashboard() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/employer/company_name/${email}`);
        setCompanyName(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  useEffect(() => {
    console.log('Email that is passed from login page:', email);
    console.log('Company Name:', companyName);
  }, [email, companyName]);

  return (
    <div>
      <VideoBackground>
        <video autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
        </video>
        <ContentBox>
          <div>
            <h1>Let's make your next great hire. Fast</h1>
            <h5>Save time and effort in your hiring journey. Finding the best fit for the job shouldn’t be a full-time job. Hire an Intern simple and powerful tools let you source, screen, and hire faster.</h5>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button style={{ margin: 10 }} onClick={() => navigate('/employer/postjob')}>
                Post A Job
              </Button>
              <Button onClick={() => navigate(`/employer/viewpostedjobs/${companyName}`)} style={{ margin: 10 }}>View Posted Jobs</Button>
            </ButtonGroup>
          </div>
        </ContentBox>
      </VideoBackground>
    </div>
  );
}
