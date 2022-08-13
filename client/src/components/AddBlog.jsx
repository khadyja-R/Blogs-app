import { Button, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useStyles } from './utils';
const labelStyle = {mb:1 , mt:2 , fontSize: "24px" , fontWeight: "bold"}

const AddBlog = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
const sendRequest = async() =>{
  const res = await axios.post("http://localhost:5000/api/blog/add",{
    title: inputs.title, 
    description: inputs.description,
    image:  inputs.image,
    user:localStorage.getItem("userId")

  }).catch(err=>console.log(err));

  const data = res.data;

  return data;
 
 
}
const  handleChange = (e) =>{
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));

}

const handleSubmit = (e) =>{

  e.preventDefault();
    console.log(inputs);

    sendRequest().then((data=>console.log(data))).then(()=>navigate("/blogs"));

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} borderColor="#FFC0CB" borderRadius={10} boxShadow="10px 10px 20px #ccc"  padding={3} margin={'auto'}  display="flex" 
        flexDirection={"column"}  width={"80%"}  marginTop={15}>
          <Typography className={classes.font} fontWeight={'bold'} padding={3} color="grey" variant='h2' textAlign={'centre'}></Typography>
          <InputLabel className={classes.font} sx={labelStyle}>Title</InputLabel>
          <TextField  className={classes.font} name="title"       value={inputs.title} onChange = {handleChange}    margin='auto' variant='outlined'></TextField>
         
          <InputLabel className={classes.font}  sx={labelStyle}>Description</InputLabel>
          <TextField className={classes.font} name="description" value={inputs.description} onChange = {handleChange}   margin='auto' variant='outlined'></TextField>
          
          <InputLabel className={classes.font} sx={labelStyle}>Img</InputLabel>
          <TextField  className={classes.font} name="image" value={inputs.image} onChange = {handleChange}  margin='auto' variant='outlined'></TextField>

          <Button type="submit"  sx={{mt:3 , borderRaduis:4 , width: "10%", margin:"auto"  }} variant="contained"  color='warning'   >Share</Button>
        </Box>
      </form>
    </div>
  );
}

export default AddBlog;