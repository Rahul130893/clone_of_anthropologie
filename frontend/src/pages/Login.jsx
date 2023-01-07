import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useEffect, useState } from "react";
import logIn from "../Redux/auth/action";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import CustomizedDialogs from "../components/Dialog";

const theme = createTheme();
export const Login = () => {
  const [loading, setLoading] = useState(false);
  const response = useSelector((store) => store.authReducer.token);
  const error = useSelector((store) => store.authReducer.error);
  const auth = useSelector((store) => store.authReducer.auth);

  console.log("one", response.token, error, auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setUserPass(e.target.value);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setClicked(true);
    dispatch(logIn({ email: userEmail, password: userPass }));
  };
  //console.log("two", response.token, error, auth);
  useEffect(() => {
    if (response.token && auth && clicked) {
      setLoading(false);

      navigate("/cloths", { replace: true });
      }
      if (clicked && error === true) {
          setLoading(false)
      }
  }, [handleSubmitLogin]);

  return (
    <div>
      <Navbar />
      <h2>Login</h2>

      <CustomizedDialogs>
        <br />
        {loading ? <CircularProgress /> : null}
        {error && clicked ? "Email or Password is wrong":null}
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmitLogin}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChangeEmail}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChangePass}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: 3,
                    mb: 2,
                    marginBottom: 8,
                    backgroundColor: "grey",
                  }}
                >
                  Sign In
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Sign Up
                  </Typography>
                  <Typography component="h1" variant="caption">
                    Welcome! It's quick and easy to set up an account
                  </Typography>
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 5,
                        mb: 2,
                        marginBottom: 8,
                      }}
                    >
                      Register Now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </CustomizedDialogs>
      <Footer />
    </div>
  );
};
