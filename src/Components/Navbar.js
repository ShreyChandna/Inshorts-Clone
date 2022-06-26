import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from './Sidebar';
import '../App.css'
const Navbar = (props) => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
  return (
    <div className='nav'>
      <div className="logo">
    <ThemeProvider theme={darkTheme}>
    <Sidebar setCategory={props.setCategory}/>
    </ThemeProvider>
    </div>
    <img className="icon" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="img" />
    </div>
  )
}

export default Navbar
