import { Tabs, AppBar, Typography, Tab, styled, Box } from "@mui/material";
import React, { useState } from "react";
interface AppBarProps {
  children: React.ReactNode;
}

const StyledTabs = styled(Tabs)({
  cursor: "pointer",
  "& .MuiTabs-indicator": {
    backgroundColor: "black",
  },
});

const StyledTab = styled(Tab)({
  minWidth: 100,
  outline: "none !important",
  color: "black",
  cursor: "pointer",
  "&.Mui-selected": {
    color: "black",
  },
});

const AppBarLayout: React.FC<AppBarProps> = ({ children }) => {
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(newValue);

    const section = document.getElementById(newValue);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: 'nearest',
      });
    }
  };

  return (
    <>
      <AppBar
        sx={{
          height: 70,
          backgroundColor: "#fad1ac",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          pr: 10,
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          sx={{
            outline: "none",
          }}
        >
          <StyledTab label="Home" value={"home"} />
          <StyledTab label="About" value={"about"} />
          <StyledTab label="Projects" value={"ksk2"} />
          <StyledTab label="Technologies" value={"ksk3"} />
        </StyledTabs>
      </AppBar>

      <Box
        sx={{
          mt: 10,
          px: 2,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppBarLayout;
