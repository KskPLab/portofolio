import { Tabs, AppBar, Typography } from "@mui/material";
import React from "react";

interface AppBarProps {
  children: React.ReactNode;
}

const AppBarComponent: React.FC<AppBarProps> = ({ children }) => {
  return (
    <AppBar>
      <Typography sx={{ color: "black" }}>App BAR</Typography>

      {children}
    </AppBar>
  );
};

export default AppBarComponent;
