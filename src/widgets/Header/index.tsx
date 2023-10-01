"use client";
import { FC, useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Stack,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { HeaderProps } from "./Type";

const drawerWidth = 240;
const navItems = ["About", "Contact"];

const Header: FC<HeaderProps> = () => {
  const [MobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box>
      <Typography variant="h5" sx={{ my: 2 }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          return (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider />
      <Stack textAlign="center" direction="column" rowGap={1}>
        <Button>SIGN IN</Button>
        <Button variant="contained">SUBSCRIBE</Button>
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="relative">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Hidden smDown>
            <Typography
              variant="h5"
              component={Link}
              underline="none"
              href="/"
              pr={8}
            >
              Logo
            </Typography>
          </Hidden>

          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              return (
                <Link px={2} key={item} href="#" underline="none">
                  {item}
                </Link>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button>SIGN IN</Button>
            <Button variant="contained">SUBSCRIBE</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={MobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
