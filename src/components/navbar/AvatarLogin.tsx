import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { useLocation } from "react-router-dom";
import NavLink from "components/utils/Link";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { RootState } from "app/store";

function AvatarLogin(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const currentUser = user.currentUser;
  const isLoggedin = user.authentiicate;
  let location = useLocation();

  return !isLoggedin ? (
    <NavLink to={"/modal/signup"} state={{ modalLocation: location }}>
      <IconButton size="small" color="inherit">
        Log in
      </IconButton>
    </NavLink>
  ) : (
    <NavLink to={"/profile/main"}>
      <IconButton size="small" color="inherit">
        <Badge badgeContent={0} color="error">
          <Avatar
            alt={`${currentUser.username}`}
            src={`${currentUser.profileImageUrl}`}
          />
        </Badge>
      </IconButton>
    </NavLink>
  );
}

export default AvatarLogin;
