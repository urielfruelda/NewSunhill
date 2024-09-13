import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "./components/Navbar"; // MUI AppBar version
import Footer from "./components/Footer"; // MUI styled Footer

const LoginPageContent = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });

  const [buttonPosition, setButtonPosition] = useState(0);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    setButtonPosition(newDarkMode ? 25 : 0);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
      setButtonPosition(25);
    }
  }, []);

  return (
    <div className="login-page-content">
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Box
            className="login-main"
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              p: 2,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url(/assets/supplies.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.4,
                zIndex: -1,
              },
            }}
          >
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              buttonPosition={buttonPosition}
            />

            <Box sx={{ position: "relative", textAlign: "center", mb: 3 }}>
              <img
                src="./assets/sunhilllogo.png"
                alt="LMS Logo"
                style={{ maxWidth: "100%" }}
              />
              <Typography
                variant="body2"
                className="branch-p"
                sx={{
                  position: "absolute",
                  bottom: { xs: "100px", sm: "137px" },
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  gap: 1,
                  color: "#555",
                  padding: "0 9px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  fontSize: { xs: "10", sm: "15px" },
                  textOverflow: "ellipsis",
                }}
              >
                <span>Batangas</span>
                <span>•</span>
                <span>Rosario</span>
                <span>•</span>
                <span>Bauan</span>
                <span>•</span>
                <span>Metro Tagaytay</span>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                maxWidth: { xs: 400, md: 600 },
                position: "relative",
                bottom: { xs: "100px", md: "130px" },
              }}
            >
              <Button
                fullWidth
                variant="contained"
                color="success"
                sx={{
                  py: 2,
                  display: "flex",
                  flexDirection: "column", // Stacks the title and subtext
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                >
                  Teacher Portal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 0.5, opacity: 0.8, textTransform: "none" }}
                >
                  Access your Teacher/Admin Account.
                </Typography>
              </Button>

              <Button
                component={RouterLink}
                to="/student-login"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  py: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                >
                  Student Portal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 0.5, opacity: 0.8, textTransform: "none" }}
                >
                  Sign in to your Student account or create a new account.
                </Typography>
              </Button>

              <Button
                fullWidth
                variant="contained"
                color="warning"
                sx={{
                  py: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textTransform: "none" }}
                >
                  Parent/Guardian Portal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 0.5, opacity: 0.8, textTransform: "none" }}
                >
                  Access your Parent or Guardian account.
                </Typography>
              </Button>
            </Box>
          </Box>
          <Footer />
        </Box>
      </div>
    </div>
  );
};

export default LoginPageContent;
