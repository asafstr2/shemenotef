import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

interface Props {
  onClick?: () => void;
  navigateTo: string;
  buttonText: string;
  variant?: "contained" | "text" | "outlined";
  size?: "large" | "small" | "medium";
  fullWidth?: boolean;
  color:
    | "error"
    | "inherit"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
}
function LoggedInButton({
  buttonText,
  navigateTo,
  onClick,
  variant = "contained",
  size = "large",
  fullWidth = false,
  color = "primary",
  ...props
}: Props) {
  const isUserLoggedIn = useSelector(
    (state: RootState) => state.user.authentiicate
  );
  const navigate = useNavigate();
  const style = {
    margin: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const hundleCLick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
    if (onClick) {
      return onClick;
    }
  };

  return (
    <Tooltip title={!isUserLoggedIn ? "please login to continue" : ""}>
      <div style={style}>
        <Button
          onClick={hundleCLick}
          color={color}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          disabled={!isUserLoggedIn}
          {...props}
        >
          {buttonText}
        </Button>
      </div>
    </Tooltip>
  );
}

export default LoggedInButton;
