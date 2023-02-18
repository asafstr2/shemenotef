import { masterTheme } from "util/theame";
import { Button } from "@mui/material";
import { translate } from "util/translate";

const classes = {
  root: {
    height: "30px",
    width: "100%",
    background: masterTheme.palette.primary.main,
    // [theame.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "2px",
    marginInlineStart: "8px",
    width: "100%",
  },
};

function CategoriesNavBar() {
  const categories = [
    translate("clothes"),
    translate("oils"),
    translate("baby"),
  ];
  return (
    <div style={classes.root}>
      <div style={classes.wrapper}>
        {categories.map((categorie, i) => (
          <Button size="small" color="secondary" key={i}>
            {categorie}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesNavBar;
