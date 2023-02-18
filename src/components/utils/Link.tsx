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
    <div>
      <Link
        style={{
          textDecoration: match ? "underline" : "none",
          opacity: match ? "0.6" : "",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
