import * as React from "react"
import './Footer.css'

// importing material UI components
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"

// icons
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
return (
	<AppBar position="static">
		<Toolbar className="toolbar">
		
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="end"
			color="inherit"
			aria-label="menu" 
			sx={{ mr: 2 }}
		>
			{/*A set of Icons wrapped in Icon */}
			<InfoIcon className="icon"/>
			<p className="text-footer">About</p>
			<HelpIcon className="icon" />
			<p className="text-footer">Support</p>
			<ContactPhoneIcon className="icon" />
			<p className="text-footer">Contact</p>

			<div className="hide-small">
			<p className="fine-print">Copyright</p>
			<p className="fine-print">Terms of Service</p>
			<p className="fine-print">User Agreement</p>
			</div>

			<InstagramIcon fontSize="large"/>
			<TwitterIcon fontSize="large"/>
			<FacebookIcon fontSize="large"/>
			
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		
		</Toolbar>
	</AppBar>
);
}
export default Footer;
