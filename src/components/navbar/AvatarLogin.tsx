import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { RootState } from "app/store";
import NavLink from "components/utils/Link";
const AvatarButton = styled(IconButton)({
  padding: 8,
});

function AvatarLogin(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const currentUser = user.currentUser;
  const isAuthenticated = user?.authenticate;
  const location = useLocation();

  return (
    <>
      {!isAuthenticated ? (
        <NavLink to={"/modal/signup"} state={{ modalLocation: location }}>
          <AvatarButton size="small" color="inherit">
            <AccountCircleIcon />
          </AvatarButton>
        </NavLink>
      ) : (
        <NavLink to={"/profile/main"}>
          <AvatarButton size="small" color="inherit">
            <Avatar
              alt={`${currentUser.username}`}
              src={`${currentUser.profileImageUrl}`}
              sx={{ width: 28, height: 28 }}
            />
          </AvatarButton>
        </NavLink>
      )}
    </>
  );
}

export default AvatarLogin;
