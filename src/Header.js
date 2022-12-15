import * as React from "react"
import './Header.css'

// importing material UI components
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
// import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import logo from "./images/logo.png"

function Header() {
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
			sx={{ mr: 2 }} className= "icons"
		>
			{/*A set of Icons wrapped in Icon */}
			<div className="mini-header">
			<img className="logo" src={logo} alt="logo"></img>

			<div>
			<HomeIcon className="icon" />
			<p className="text-header">Home</p>
			</div>

			<div>
			<SearchIcon className="icon" />
			<p className="text-header">Search</p>
			</div>
			
			<div>
			<ThumbsUpDownIcon className="icon" />
			<p className="text-header">Trade</p>
			</div>

			<div>
			<PersonAddIcon className="icon" />
			<p className="text-header">Join</p>
			</div>

			<div>
			<AccountCircleIcon className="icon" />
			<p className="text-header">Sign In</p>
			</div>
			</div>

		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		
		</Toolbar>
	</AppBar>
);
}
export default Header;
