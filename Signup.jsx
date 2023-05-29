//

import * as React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ReactDOM } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function SignInSide() {
  
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, watch }
  // } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // const password = React.useRef({});
  // password.current = watch("password", "");

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const [username, setusername] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [conpassword, setconpassword] = useState()
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    
  
    console.log(data);




      const saveToDb = async () => {
        
        try {
          
            const body = {username:data.username,email:data.email,password:data.password};
            const res = await axios.post(
            "http://127.0.0.1:3000/api/auth/register",
            body
          );
          alert("User Added")
          navigate("/");
        
      } catch (e) {
        alert(e)
  
      
    }
  //   if(password === conpassword)
  //       {
  //         saveToDb()
  // }
  // else{
  //   console.log("Passwords do not match")
  // }
    

  }
  saveToDb()

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(./images/fit.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <img src="./images/fit2.png" alt="Logo" />
            </Avatar>
            <Typography component="h1" variant="h5">
             <b> Exercise Tracking App </b>
            </Typography><br></br>

            <Typography component="h1" variant="h5">
             <b> SIGN UP </b>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                value = {username}
                onChange={(e) =>setusername(e.target.value)}
                pattern="[a-z]{4,8}"
                label="User Name"
                name="username"
                autoFocus
                {...register("username", { required: true })}
                error={!!errors.username}
                helperText={errors.username && "Username is required"}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value = {email}
                onChange={(e) => setemail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                error={!!errors.email}
                helperText={errors.email && "Invalid email"}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                value = {password}
                onChange={(e) =>setpassword(e.target.value)}
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors.password && "Password is required"}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="conpassword"
                value = {conpassword}
                onChange={(e) => setconpassword(e.target.value)}
                label="Confirm Password"
                type="password"
                id="conpassword"
                autoComplete="current-password"
                {...register("conpassword", {
                  required: true,
                  // validate: (value) =>
                  //   value === password.current || "Passwords do not match",
                })}
                error={!!errors.conpassword}
                helperText={errors.conpassword && errors.conpassword.message}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#5F1010" }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
