import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
interface Props {
  children: JSX.Element;
  goto: string;
}
export default function PrivateRoute({ children, goto }: Props) {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const isLoggedin = useSelector(
    (state: RootState) => state.user.authentiicate
  );
  let location = useLocation();
  return user && isLoggedin ? (
    children
  ) : (
    <Navigate
      replace={true}
      to={`/modal/signup`}
      state={{ modalLocation: { goto: goto, ...location } }}
    />
  );
}
