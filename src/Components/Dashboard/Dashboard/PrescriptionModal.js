import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PrescriptionModal = ({ openBooking, handleBookingClose, appointmentsInfo }) => {
    const { name,phone,age } = appointmentsInfo;
    const [alertInfo,setAlertInfo]=useState(null);
    const [prescriptionInfo, setPrescriptionInfo] = useState([]);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...prescriptionInfo };
       
        newInfo[field] = value;
        setPrescriptionInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...prescriptionInfo,
            name,
            phone,
            age
            
        }
        console.log("newInfo=",appointment);
        // send to the server
        fetch(' https://shrouded-island-20625.herokuapp.com/addPrescription', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAlertInfo("success") ;         
                    handleBookingClose();
                }
            });
           alert("Submitted!!!")

        e.preventDefault();
    }

    return (
     <>
     {alertInfo && <Alert severity="success" color="info">
      This is a success alert — check it out!
    </Alert>}
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    
                    <form onSubmit={handleBookingSubmit}>
                       
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                    
                            defaultValue="Patient Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                           
                            defaultValue={phone}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="age"
                           
                            defaultValue={age}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="medicine"
                            onBlur={handleOnBlur}
                            defaultValue="Medicine"
                            size="small"
                        />
                       <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="advice"
                            onBlur={handleOnBlur}
                            defaultValue="Advice"
                            size="small"
                        />
                        <Button type="submit" variant="contained">Send</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
        </>
    );
};

export default PrescriptionModal;