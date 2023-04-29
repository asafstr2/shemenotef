import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "app/slices/cartSlice";
import { translate } from "util/translate";
import { AdminButtonsForDelete } from "components/buttons/AdminButtonsForDelete";
import { AdminButton } from "components/buttons/AdminButtons";
import { Products } from "app/types/core";

import Carusale from "components/utils/Carusale";
import QRCode from "react-qr-code";

import { useState, useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
}));
const LeftSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "50%",
  minWidth: "400px",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { minWidth: "300px", maxHeight: "50%" },
}));
const RightSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "50%",
  minWidth: "400px",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: { minWidth: "200px", maxHeight: "50%" },
}));
const StyledHeader = styled(Typography)(({ theme }) => ({
  //   [theme.breakpoints.down("sm")]: {},
}));

const PriceContainer = styled(Typography)(({ theme }) => ({
  marginBlock: theme.spacing(2),
  //   [theme.breakpoints.down("sm")]: {},
}));

const StyledBuyNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  //   [theme.breakpoints.down("sm")]: {},
}));
const ButtonsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  alignItems: "flex-start",
  justifyContent: "space-around",
  marginBlock: theme.spacing(6),

  //   [theme.breakpoints.down("sm")]: {},
}));
const ProductDescription = styled(Typography)(({ theme }) => ({
  //   [theme.breakpoints.down("sm")]: {},
}));

function ProductPage() {
  const navigate = useNavigate();

  const componentRef = useRef(null);
  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    // onBeforeGetContent: handleOnBeforeGetContent,
    // onBeforePrint: handleBeforePrint,
    // onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });
  const dispatch = useDispatch();
  const [showQr, setShowQr] = useState(false);
  let location = useLocation();
  const { title, description, _id, images, price }: Products =
    location?.state?.props;
  console.log(location?.state?.props);

  const path = `https://shemen-otef.onrender.com/product/${_id}/qr`;
  const imagesPreperation = (images: any) => {
    return images.map((cluodineryImage: any, i: number) => ({
      image: cluodineryImage.secure_url,
      _id: i,
    }));
  };

  const rightSection = (
    <div>
      <StyledHeader variant="h4"> {title}</StyledHeader>

      <PriceContainer variant="h5" color="text.secondary">
        {`${price.value}${price.currency}`}
      </PriceContainer>

      <ButtonsContainer>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => dispatch(addToCart(location?.state?.props))}
        >
          {translate("Add to cart")}
        </Button>

        <StyledBuyNowButton
          variant="contained"
          fullWidth
          onClick={() => {
            dispatch(addToCart(location?.state?.props));
            navigate("/checkout");
          }}
        >
          קנה עכשיו
        </StyledBuyNowButton>
        <AdminButtonsForDelete
          productId={_id}
          title={title}
          variant="contained"
          // fullWidth
        />
        <AdminButton
          handleAction={() => setShowQr(true)}
          text="qr code"
          variant="contained"
          // fullWidth
        />
        <AdminButton
          variant="contained"
          // fullWidth
          handleAction={() => navigate(`/admin/addProduct/${_id}`)}
          text="edit"
        />
      </ButtonsContainer>
      <ProductDescription>{description}</ProductDescription>
    </div>
  );
  return (
    <StyledContainer>
      <RightSection>{rightSection}</RightSection>
      <LeftSection>
        <Carusale
          //@ts-ignore
          products={imagesPreperation(images)}
          productLoading={false}
        />
      </LeftSection>
    </StyledContainer>
  );
}
export default ProductPage;
