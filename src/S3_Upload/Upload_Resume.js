// // import React, { useState } from 'react';
// // import s3 from './awsConfig';
// // import Snackbar from '@mui/material/Snackbar';
// // import MuiAlert from '@mui/material/Alert';
// // import Button from '@mui/material/Button';

// // function FileUpload() {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [open, setOpen] = useState(false);
// //   const [uploadSuccess, setUploadSuccess] = useState(false);

// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleUpload = () => {
// //     if (selectedFile) {
// //       const params = {
// //         Bucket: 'hireanintern', // Replace with your S3 bucket name
// //         Key: selectedFile.name,
// //         Body: selectedFile,
// //       };

// //       s3.upload(params, (err, data) => {
// //         if (err) {
// //           console.error('Error uploading file:', err);
// //         } else {
// //           console.log('File uploaded successfully:', data.Location);
// //           setUploadSuccess(true);
// //           setOpen(true);
// //         }
// //       });
// //     }
// //   };

// //   const handleClose = (event, reason) => {
// //     if (reason === 'clickaway') {
// //       return;
// //     }
// //     setOpen(false);
// //   };

// //   return (
// //     <div>
// //       <input type="file" onChange={handleFileChange} />
// //       <Button variant="contained" color="primary" onClick={handleUpload}>
// //         Upload
// //       </Button>
// //       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
// //         <MuiAlert
// //           elevation={6}
// //           variant="filled"
// //           onClose={handleClose}
// //           severity="success"
// //           sx={{ width: '100%' }}
// //         >
// //           {uploadSuccess
// //             ? 'File uploaded successfully!'
// //             : 'Error uploading file. Please try again.'}
// //         </MuiAlert>
// //       </Snackbar>
// //     </div>
// //   );
// // }

// // export default FileUpload;





import React, { useState } from 'react';
// import s3 from './awsConfig';
import s3 from '../S3_Upload/awsConfig';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const params = {
        Bucket: 'hireanintern-resume', // Replace with your S3 bucket name
        Key: selectedFile.name,
        Body: selectedFile,
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Error uploading file:', err);
        } else {
          console.log('File uploaded successfully:', data.Location);
          setUploadSuccess(true);
          setOpen(true);
        }
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          {uploadSuccess
            ? 'File uploaded successfully!'
            : 'Error uploading file. Please try again.'}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default FileUpload;



