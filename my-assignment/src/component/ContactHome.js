import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import ContactsIcon from '@mui/icons-material/Contacts';
import EditIcon from '@mui/icons-material/Edit';
import PopUp from "./ContactPopUp";


export default function ContactHome() {

const[state,setState]=React.useState(false);
   const togglePop = () => {
        setState({
          state: !state
        });
      };
    
    
  return (<div>
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
         Contact
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <ContactsIcon />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EditIcon onClick={togglePop} />
            </InputAdornment>
          }
        />
       
        
      </FormControl>
    </Box>
    {state ? <PopUp toggle={togglePop}/>:null}
    </div>
  );
}
