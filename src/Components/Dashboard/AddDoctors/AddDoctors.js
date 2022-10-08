import React, { useState } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import SideBar from "../SideBar/SideBar";
import DoctorList from "../DoctorList/DoctorList";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from './../SideBar/Loading';
const AddDoctors = () => {
  const { register, handleSubmit, errors } = useForm();

  const imageStorage='dc1c8386d1d339057c1a04a4e20b0100';
  const [doctorList,setDoctorList]=useState([]);
 
  
  
 //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 const onSubmit=async data=>{
 console.log("data",data);
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
      const doctor = {
          name: data.name,
          email: data.email,
          Category: data.Category,
          degree:data.degree,
          designation:data.designation,
          days:data.days,
          time:data.time,
          img: img
      }
      //send to your database 
      fetch(' https://shrouded-island-20625.herokuapp.com/addDoctors', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
            
          },
          body: JSON.stringify(doctor)
      })
      .then(res =>res.json())
      .then(inserted =>{
        if(inserted.insertedId){
          toast.success('Doctor added successfully')
          window.location.reload();
          setDoctorList(inserted);
      }
      else{
        toast.error('Failed to add the doctor');
    }
      
      })
  }  
}) 
}

  return (
    <div className="dashboardSection">
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <div className="p-2 my-2">
         
            <br /> 
          <div className="row">
            <div className="col-md-6 ">
            <h3 style={{ color: "#1CC7C1" }}>Make a New Doctor</h3> 
            <form onSubmit={handleSubmit(onSubmit)} style={{ backgroundColor: '#fff' ,borderRadius:"10px",padding:"15px"}}>
           
                         
                         <div className="form-group">
                         <input
                           name="name"
                           placeholder="Your Name"
                           className="form-control"
                           ref={register({ required: true })}
                         />
                         {errors.name && (
                           <span className="inputError">Name is required</span>
                         )}
                         </div>
                        
                         
                         <div className="form-group">
                         <input
                           name="email"
                           placeholder="Email"
                           className="form-control"
                           ref={register({ required: true })}
                         />
                         {errors.phone && (
                           <span className="inputError">Email is required</span>
                         )}
                         </div>
 
                         <div className="form-group">
                         <input
                           ref={register({ required: true })}
                           className="form-control"
                           name="Category"
                           placeholder="Category"
                         />
                         {errors.age && (
                           <span className="text-danger">
                             This field is required
                           </span>
                         )}
                         </div>
 
                         <div className="form-group">
                         <input
                          name="degree"
                          placeholder="Degree"
                          className="form-control"
                           ref={register({ required: true })}
                         />
                         {errors.medicine && (
                           <span className="inputError">
                             This field is required
                           </span>
                         )}
                         </div>
                        <div className="form-grop">
                        <input
                            name="designation"
                            placeholder="Designation"
                            className="form-control"
                           ref={register({ required: true })}
                         />
                         {errors.advice && (
                           <span className="inputError">This field is required</span>
                         )}
                        </div>
                        <br/>
                         <div className="form-group">
                         <input
                           name="days"
                           placeholder="Days"
                           className="form-control"
                           ref={register({ required: true })}
                         />
                         {errors.advice && (
                           <span className="inputError">Advice is required</span>
                         )}
                         </div>
                        <div className="form-group">
                        <input
                             name="time"
                             placeholder="time"
                             className="form-control"
                             
                           ref={register({ required: true })}
                         />
                         {errors.advice && (
                           <span className="inputError">Advice is required</span>
                         )}
                        </div>
                        <div className="form-control w-full max-w-xs">
                   
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        name="image"
                        className="input input-bordered w-full max-w-xs"
                        ref={register({ required: true })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs p-3 mt-4' type="submit" value="Add" />
                </form>
            </div>
            <div className="col-md-6">
            <h3 style={{ color: "#1CC7C1" }}>Doctor's List</h3>  
              
              <DoctorList > </DoctorList>
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
