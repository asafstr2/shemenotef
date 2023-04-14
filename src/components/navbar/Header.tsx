import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Products } from "app/types/core";
import { Language } from "util/const";
import { useSelector } from "react-redux";
import { getTotals } from "app/slices/cartSlice";
import Cart from "routes/cart/Cart";
import Popover from "@mui/material/Popover";
import { ShoppingCartOutlined } from "@mui/icons-material";
import AvatarLogin from "./AvatarLogin";
import { useMediaQuery } from "@mui/material";
import NavLink from "components/utils/Link";
import Searchtest from "components/ProductAutoCompleateAntd";

const Logo = styled("div")(({ theme }) => ({
  margin: 0,
  width: "50px",
  marginBlockStart: "15%",
  transition: "width 0.2s ease-in-out",
  "&.shrink": {
    width: "30px",
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  "@media only screen and (max-width: 600px)": {
    width: "30px",
  },
}));
interface Props {
  className?: string;
  options: Products[];
  setOptions: React.Dispatch<React.SetStateAction<Products[]>>;
  refetch?: () => void;
  lang: Language;
}

export default function PrimarySearchAppBar(props: Props) {
  const isMobile = useMediaQuery("(max-width:600px)");

  const { cartTotalQuantity } = useSelector(getTotals);

  const [cartAnchorEl, setCartAnchorEl] = React.useState(null);

  const handleCartOpen = (event: any) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const cartOpen = Boolean(cartAnchorEl);
  const cartPopoverContent = (
    <Box sx={{ width: { xs: 300, sm: 400, md: 500, lg: 700 }, p: 2 }}>
      <Cart handleCartVisibleChange={handleCartClose} />
    </Box>
  );
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const [shrink, setShrink] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="cart" color="inherit">
          <Badge badgeContent={cartTotalQuantity} color="info">
            <ShoppingCartOutlined onClick={handleCartOpen} />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AvatarLogin />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar className={shrink ? "shrink" : ""} position="sticky">
      <Toolbar>
        <NavLink to="/">
          <Typography variant="h6" noWrap component="div">
            <Logo className={shrink ? "shrink" : ""}>
              <img
                alt="Shemen otef"
                src="https://static1.s123-cdn-static-a.com/uploads/7229067/400_642b1b8106cce.png"
              ></img>
            </Logo>
          </Typography>
        </NavLink>
        <Searchtest {...props} />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Popover
              id="cart-popover"
              open={cartOpen}
              anchorEl={cartAnchorEl}
              onClose={handleCartClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {cartPopoverContent}
            </Popover>
            <Badge badgeContent={cartTotalQuantity} color="info">
              <ShoppingCartOutlined onClick={handleCartOpen} />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >
            <AvatarLogin />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {isMobile && renderMobileMenu}
    </AppBar>
  );
}
