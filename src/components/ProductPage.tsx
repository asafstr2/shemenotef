import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "app/slices/cartSlice";
import { translate } from "util/translate";
import { AdminButtonsForDelete } from "components/buttons/AdminButtonsForDelete";
import { AdminButton } from "components/buttons/AdminButtons";

import Carusale from "components/utils/Carusale";
import QRCode from "react-qr-code";
import { useState, useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";

interface Props {
  imageHeight?: number;
  addToCartText?: string;
  title: string;
  description: string;
  _id: string;
  images: any;
}
function ProductPage() {
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
  const {
    imageHeight = 200,
    addToCartText = translate("Add to cart"),
    title,
    description,
    _id,
    images,
  }: Props = location?.state?.props;
  const path = "https://shemen-otef.onrender.com" + location.pathname;
  console.log({ location });
  const imagesPreperation = (images: any) => {
    return images.map((cluodineryImage: any, i: number) => ({
      image: cluodineryImage.secure_url,
      _id: i,
    }));
  };
  const carusaleStyle = {
    height: imageHeight,
    color: "#fff",
    background: "#364d79",
    width: "70%",
    margin: "auto",
    zIndex: 1600,
  };
  return (
    <Card sx={{ maxWidth: "100%", maxHeight: "50vh" }}>
      {showQr && (
        <div
          style={{
            height: "100%",
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QRCode
            size={256}
            value={path}
            viewBox={`0 0 256 256`}
            ref={componentRef}
            onClick={handlePrint}
          />
          <button onClick={handlePrint}>print</button>
        </div>
      )}
      {!showQr && (
        <>
          {" "}
          <CardActionArea>
            <div>
              <Carusale
                //@ts-ignore
                style={carusaleStyle}
                products={imagesPreperation(images)}
                productLoading={false}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(addToCart(location?.state?.props))}
            >
              {addToCartText}
            </Button>
            <AdminButtonsForDelete productId={_id} title={title} />
            <AdminButton handleAction={() => setShowQr(true)} text="qr code" />
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default ProductPage;
