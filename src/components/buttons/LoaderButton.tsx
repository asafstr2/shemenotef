import Button from "@mui/material/Button";

interface Props {
  handleSubmit: () => void;
  loading: boolean;
  buttonText: string;
  variant?: "contained" | "text" | "outlined";
  size?: "large" | "small" | "medium";
  color?:
    | "error"
    | "inherit"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
}
function LoaderButton({
  handleSubmit,
  loading,
  buttonText,
  variant = "contained",
  ...props
}: Props) {
  return (
    <Button variant={variant} onClick={handleSubmit} {...props}>
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
            <i className="fa fa-spinner fa-spin"></i>{" "}
          </span>
        )}
        <span>{buttonText}</span>
      </div>
    </Button>
  );
}

export default LoaderButton;
