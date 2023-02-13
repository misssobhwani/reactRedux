import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentsIcon from "@mui/icons-material/Payments";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useState } from "react";
import ContactHome from "./ContactHome";
import { BrowserRouter as Router, Link, Routes, Route,useLocation,useRouteMatch } from "react-router-dom";
import AnalyticsIcon from '@mui/icons-material/Analytics';



export default function VerticalToolBar() {
  const [showAbotUs, setShowAboutUs] = useState(false);


  

//   togglePop = () => {
//     setState({
//       seen: !state.seen
//     });
//   };


  return (
    
    <div>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          // bgcolor: 'background.paper',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: "white" }}>
              <ImageIcon style={{ color: "grey" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{ fontWeight: "bold" }} primary="A.T.Inks" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: "white" }}>
            <Link to="/cards">
              <DashboardIcon style={{ color: "grey" }} />
              </Link>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="DashBoard" />
        </ListItem>
      
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: "white" }}>
            <Link to="/tag">
              <WorkIcon style={{ color: "grey" }} />
              </Link>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Tags" />
        </ListItem>
       
       
       
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: "white" }}>
            <Link to="/tracking">
              <EmojiEventsIcon style={{ color: "grey" }} />
              </Link>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Tracking" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: "white" }}>
            <Link to="/about">
              <InfoIcon style={{ color: "grey" }} />
              </Link>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="About Us"
            onClick={() => setShowAboutUs(true)}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ background: "white" }}>
            <Link to="/analytics">
              <AnalyticsIcon style={{ color: "grey" }} />
              </Link>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
{ showAbotUs &&
      <div style={styles.formContainer}>
        <div style={styles.contactUs}>
          <ContactHome />
        </div>
      </div>}
      
    </div>
    
  );
}


const styles=({
    formContainer:{
      display:'flex',
    },
    contactUs:{
      display:'block',
      borderColor: 'red',
      width:'700px',
      paddingLeft:'10px',
    },
  })