import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "app/store";
interface Props {
  children: JSX.Element;
}
export default function PrivateRoute({ children }: Props) {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const isLoggedin = useSelector(
    (state: RootState) => state.user.authentiicate
  );
  const admin = user?.roles?.includes("admin");
  const isAdmin = user && isLoggedin && admin;
  useEffect(() => {
    if (!isAdmin)
      toast.error("Admin route only", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
  }, [isAdmin]);
  return isAdmin ? children : <Navigate replace={true} to={`/`} />;
}
