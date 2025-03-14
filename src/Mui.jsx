import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Alert from '@mui/material/Alert';


import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { blue } from '@mui/material/colors';




const emails = ['username@gmail.com', 'user02@gmail.com'];

function CustomDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  CustomDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disablePadding key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                 Test Icon
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
               Test Icon
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}








function Mui() {
    
    const [value, setValue] = useState(2);
    let Cities=["CASABLANCA","FES","MARRAKECH","SALE","RABAT"];
    let [ville,setVille]=useState('');
  return (
    <div>
        <h1>Welcome to MUI</h1>
        {/* <Button variant="outlined"  onClick={()=>{
            alert("Hello World");
        }}>Text</Button> */}


<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" >
       
        Delete
</Button>
      
<Stack spacing={2} direction="column">
   <h1>Rate My score</h1>
   <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />



<Button variant="contained" color="success"

onClick={()=>{
alert(`Votre score est ${value}/5`);
}} 

>
  Success
</Button>

<hr></hr>

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ville</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ville}
          label="Ville"
          onChange={(ev)=>setVille(ev.target.value)}
        >
          {Cities.map((el)=>{
            return <MenuItem value={el}>{el}</MenuItem>
        
          })}
          
        </Select>
      </FormControl>
      <Button variant='contained' color='error' onClick={()=>alert("Your City   Is "+ville)}  >
    Your Age 
        </Button>

        {/* Avatar */}




        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFVRISc2AfwwfNELYEVAQWZMeWhNFOqzESA&s"  onClick={()=>{
   alert("hello")
}} />
      <Alert severity="success">This is an error Alert.</Alert>

</Stack>


<div>
      
      
     
      <br />
      <Button variant="outlined" onClick={()=>{}}>
        Open simple dialog
      </Button>
      <CustomDialog
        selectedValue={selectedValue}
        open={true}
        onClose={handleClose}
      />
    </div>
    </div>
  )
}

export default Mui