import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Root.module.css";

export const Root = (props) => {
  return (
    <>
      <Box className={styles.menu} sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <NavLink to={"/"}>LABORETE</NavLink>
            </Typography>

            <Box sx={{ display: "flex" }}>
              <NavLink to={"/companies"}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Companies
                </Button>
              </NavLink>

              <NavLink to={"/my-profile"}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  My profile
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
};
