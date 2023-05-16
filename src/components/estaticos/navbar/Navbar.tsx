import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
        <AppBar position="static" className='corNavBar' >
                <Toolbar variant="dense"  >
                <Grid container justifyContent={'space-between'} >
                    <Box style={{ cursor: "pointer" }}  >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                | Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                | Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                | Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className=' text-decoration-none' >
                            <Box mx={1} style={{ cursor: "pointer" }} color='white'>
                                <Typography variant="h6" color="inherit">
                                    | LogOut
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;