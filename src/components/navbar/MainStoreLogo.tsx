import Typography from "@mui/material/Typography";
import NavLink from "components/utils/Link";
import { translate } from "util/translate";

function MainStoreLogo() {
  return (
    <NavLink to="/">
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ cursor: "pointer", fontSize: { xs: "1rem", sm: "2rem" } }}
      >
        {translate("shemenOtef")}
      </Typography>
    </NavLink>
  );
}

export default MainStoreLogo;
