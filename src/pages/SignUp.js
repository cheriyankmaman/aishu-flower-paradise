import React, { Component } from "react";
import {Button, Container, TextField, Grid} from '@mui/material';
import "../App.css";
import "../styles/SignUp.css";

export class SignUp extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }

    render() {
        let setColor = {color: "palevioletred", fontsize: "150px"}
        return (
            <Container >

                <Grid container spacing={2}>
                    <Grid container item xs={6} alignItems="center" spacing={2}>
                        <Grid item xs={12}>
                            <h1 style={setColor}>Sign Up</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic"variant="standard" label="username" type='text' value={this.state.username} onChange={this.userNameChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" variant="standard" label="password" type='password' value={this.state.password} onChange={this.onPasswordChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" variant="standard"label="email" type='text' value={this.state.email} onChange={this.onEmailChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Sign Up</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} alignItems="center" spacing={2}>
                        <Grid item xs={12}>
                            <h1 style={setColor}>Sign In</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic"variant="standard" label="username" type='text' value={this.state.username} onChange={this.userNameChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" variant="standard" label="password" type='text' value={this.state.password} onChange={this.onPasswordChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="success">Sign In</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}


export default SignUp;
