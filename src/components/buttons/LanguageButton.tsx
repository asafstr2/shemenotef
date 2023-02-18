import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import { langConst } from "util/const";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "app/slices/langSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { RootState } from "app/store";

const classes = {
  root: {
    marginInlineEnd: 3,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    "& .MuiSelect-select": {
      fontSize: 15,
      curser: "pointer",
    },
    "& .MuiSelect-selectMenu": {
      curser: "pointer",
    },
  },

  formControl: {
    minWidth: 90,
  },
  icon: {
    marginInlineEnd: 8,
  },
};

export default function LanguageButton() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const language = useSelector((state: RootState) => state.lang.lang);
  let languages = Object.keys(langConst);
  let dispatch = useDispatch();

  const changeLanguage = (val: any) => dispatch(setLanguage(val));

  const handleChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    //@ts-ignore
    <div style={classes.root}>
      <TranslateIcon style={classes.icon} />
      <FormControl style={classes.formControl}>
        <Select
          disableUnderline
          value={language}
          onChange={handleChange}
          variant="standard"
        >
          {languages.map((leng, i) => (
            <MenuItem key={i} value={leng}>
              {leng}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
