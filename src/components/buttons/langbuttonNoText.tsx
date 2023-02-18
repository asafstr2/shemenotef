import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/IconButton";

import TranslateIcon from "@mui/icons-material/Translate";

import MenuItem from "@mui/material/MenuItem";
import { langConst } from "util/const";
import { useDispatch } from "react-redux";
import { setLanguage } from "app/slices/langSlice";

const classes = {
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
};
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let languages = Object.keys(langConst);
  let dispatch = useDispatch();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (val: any) => dispatch(setLanguage(val));

  const handleChange = (lang: any) => {
    changeLanguage(lang);
    handleClose();
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    //@ts-ignore
    <div style={classes.root}>
      <Button
        aria-describedby={id}
        variant="standart"
        onClick={handleClick}
        //@ts-ignore
        style={classes.root}
      >
        <TranslateIcon fontSize={"large"} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {languages.map((leng, i) => (
          <MenuItem key={i} value={leng} onClick={(e) => handleChange(leng)}>
            {leng}
          </MenuItem>
        ))}
      </Popover>
    </div>
  );
}
