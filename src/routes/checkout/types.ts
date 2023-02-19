export type Data = {
  shipping: {
    firstName?: string;
    lastName?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
    email?: string;
  };
  payment: {
    cardName?: string;
    cardNumber?: string;
    expDate?: string;
    cvv?: string;
    saveCard?: string;
  };
};
