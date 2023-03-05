import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  children: JSX.Element;
  to: string;
  state?: any;
}
function CustomLink({ children, to, ...props }: Props) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{
        textDecoration: "none",
        opacity: match ? "0.8" : "",
        borderBottom: match ? "1px solid red" : "",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
