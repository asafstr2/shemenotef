import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "app/slices/cartSlice";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavLink from "components/utils/Link";
import { RootState } from "app/store";
export default function CartBadgeIcon() {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector(getTotals);

  return (
    <NavLink to="/cart">
      <IconButton size="large" aria-label="cart" color="inherit">
        <Badge badgeContent={cartTotalQuantity} color="error">
          <ShoppingCartIcon fontSize={"large"} />
        </Badge>
      </IconButton>
    </NavLink>
  );
}
