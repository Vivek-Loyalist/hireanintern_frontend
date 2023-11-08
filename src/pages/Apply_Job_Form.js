import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Upload_Resume from '../S3_Upload/Upload_Resume';
import axios from 'axios';
import { baseURL } from "../baseURL";
import { useParams } from "react-router-dom";

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




function Form() {
    // const [selectedFile, setSelectedFile] = React.useState(null);
    const [full_name, setFull_name] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone_number, setPhone_number] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
    };

    const { company_name , job_title} = useParams();

    // console.log(company_name)

    const onApplyJob = () => {
        const data = {
            full_name: full_name,
            email: email,
            phone_number: phone_number,
            company_name: company_name,
            job_title: job_title,

            // resume: selectedFile
        }
        axios.post(`${baseURL}/job/applyjob`, data)
            .then(res => {
                if(res.status === 200){
                    alert("Applied Successfully")
                    window.location.href = "/intern/dashboard"
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
 
    

    return (
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
                        Apply_Job_Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="full_name"
                                    label="Full Name "
                                    name="full_name"
                                    autoComplete="full_name"
                                    value={full_name}
                                    onChange={(e) => setFull_name(e.target.value)}
                                />
                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone_number"
                                    label="Phone Number"
                                    name="phone_number"
                                    autoComplete="phone_number"
                                    value={phone_number}
                                    onChange={(e) => setPhone_number(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                            </Grid>
                        </Grid>


                        {/* Upload Button code below */}

                        <div>
                            {/* s3_Upload Code here */}

                            <Upload_Resume />

                        </div>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={onApplyJob}
                        >
                            APPLY
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
                }

export default function Apply_Job_Form() {
    return (
        <Form />

    )
}