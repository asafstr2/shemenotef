import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
interface Props extends ButtonProps {
  handleSubmit: () => void;
  loading: boolean;
  buttonText: string;
}
function LoaderButton({
  handleSubmit,
  loading,
  buttonText,
  variant = "contained",
  ...props
}: Props) {
  return (
    <Button
      variant={variant}
      onClick={handleSubmit}
      {...props}
      disabled={loading}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading && (
          <span>
            <FontAwesomeIcon icon={faSpinner} spin />
          </span>
        )}
        <span>{buttonText}</span>
      </div>
    </Button>
  );
}

export default LoaderButton;
