import { useEffect, useState } from "react";
import { usePaymantSucessMutation } from "app/services/paymant";
import { parseUrl } from "util/functions";
function ThankYouPage() {
  const distructeredUrl = parseUrl(window.location.href);

  const [success, setsuccess] = useState(false);
  const [sendPaymantDataToServer, { isLoading }] = usePaymantSucessMutation();
  const verifyPaymant = async () => {
    try {
      const verify = await sendPaymantDataToServer(
        distructeredUrl.queryParameters
      ).unwrap();
      // @ts-ignore
      setsuccess(verify?.verify as boolean);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyPaymant();
  }, []);
  if (isLoading) return <div>loading</div>;

  return success ? (
    <div>
      <h1>Thank you for your payment!</h1>
      <p>
        We have received your payment and your order will be processed shortly.
      </p>
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
