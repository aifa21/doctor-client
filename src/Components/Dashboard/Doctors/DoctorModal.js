import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


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

const DoctorModal = ({id,openBooking, handleBookingClose }) => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const [info, setInfo] = useState({});
    const handleOnBlur = (e) => {
        console.log("e",e);
        const newInfo = { ...info };
        console.log(e.target.value);
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
      };
    const imageStorage='dc1c8386d1d339057c1a04a4e20b0100';

    const onSubmit = async data=> {
       
        const doctor={...info};
       
        console.log("data",doctor);
  const image=data.image[0];
  const formData = new FormData();
  formData.append('image', image);
  const url=`https://api.imgbb.com/1/upload?key=${imageStorage}`;

  fetch(url, {
    method: 'POST',
    body: formData
})
.then(res=>res.json())
.then(result =>{
  if(result.success){
      const img = result.data.url;
      const updateDoctor = {
        name: doctor.name,
        email: doctor.email,
        Category: doctor.Category,
        degree:doctor.degree,
        designation:doctor.designation,
        days:doctor.days,
        time:doctor.time,
        img: img
    }
      //    update to the server
     fetch(` https://shrouded-island-20625.herokuapp.com/addDoctors/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateDoctor)
    })
        .then(res => res.json())
        .then(data => console.log("status=",updateDoctor))
     
  }  
}) 
    
        
       
    }

    return (
     <>
 
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
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                    <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                           
                            placeholder="name"
                           onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="degree"
                           
                            placeholder="degree"
                           onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="designation"
                           
                            placeholder="designation"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="days"
                            placeholder="days"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                       <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="time"
                            placeholder="Time"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <input
                        type="file"
                        name="image"
                        onBlur={handleOnBlur}
                        className="input input-bordered w-full max-w-xs"
                        ref={register({ required: true })}
                    />
                        <Button type="submit" variant="contained">Send</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
        </>
    );
};

export default DoctorModal;