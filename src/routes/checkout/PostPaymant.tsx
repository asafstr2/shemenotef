import { useEffect, useState } from "react";
import { usePaymantSucessMutation } from "app/services/paymant";
import { parseUrl } from "util/functions";
import { clearCart } from "app/slices/cartSlice";
import { useDispatch } from "react-redux";
import Loader from "components/utils/Loader";

function ThankYouPage() {
  const distructeredUrl = parseUrl(window.location.href);
  const dispatch = useDispatch();

  const [success, setsuccess] = useState(false);
  const [sendPaymantDataToServer, { isLoading }] = usePaymantSucessMutation();
  const verifyPaymant = async () => {
    try {
      const verify = await sendPaymantDataToServer(
        distructeredUrl.queryParameters
      ).unwrap();
      // @ts-ignore
      setsuccess(verify?.verify as boolean);
      //clear cart
      dispatch(clearCart({}));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyPaymant();
  }, []);
  if (isLoading) return <Loader />;

  return success ? (
    <div>
      <h1>התשלום התקבל בהצלחה תודה!</h1>
      <p>קיבלנו את ההזמנה ונתחיל לעבוד עליה בקרוב.</p>
    </div>
  ) : (
    <div>
      <h1>something went wrong!</h1>
      <p>
        We did not received your payment please contact credit card company.
      </p>
    </div>
  );
}

export default ThankYouPage;
