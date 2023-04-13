export interface Notifications {
  _id: string;
  message: string;
  read: boolean;
  receiver: User;
  type: string;
  sender: User;
  read_at: string;
  url: string;
}
export interface Payment {
  _id: string;
  payinguser: User[];
  recipiantuser: User[];
  value: number;
  currency: string;
  calculatedValue: number;
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  passwordReset: string;
  gender: string;
  birthday: string;

  profileImageUrl: string;
  public_id: string;
  invitedBy: User;
  //for admin in later on
  roles: string[];
  facebookId: string;
  facebook: string | number | boolean;
  googleId: string;
  google: string | number | boolean;
  address: string;

  friendsInvited: User[];

  notifications: Notifications[];
  pushNotificationEndPoints: string[];
  paymentsimade: Payment[];
  paymentsirecived: Payment[];

  productPurchased: Products[];
  orders: Order[];
}
export interface Review {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: User;
}
export interface Products {
  _id: string;
  title: string;
  otherLanguageTitle: {
    hebrew: string;
    russian: string;
    default: string;
  };
  description: string;
  otherLanguageDescription: {
    hebrew: string;
    russian: string;
    default: string;
  };
  image: string;
  images: [];
  quantity: number;
  quantetyInStock: number;
  featured: boolean;
  outOfStock: boolean;
  listed: boolean;
  availibleForDelivery: boolean;
  deliveryDate: string;
  size: string;
  category: string;
  brand: string;
  location: string;
  dimensions: {
    width: number;
    height: number;
  };
  price: {
    value: number;
    currency: string;
  };
  rating: {
    rate: number;
    count: number;
  };
  discount: number;
  Reviews: Review[];
  timesPurchesed: string;
  discountedPrice: number;
  cartQuantity: number;
}

export interface Cart {
  cartItems: Products[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  couponCodes: string[];
}
export interface Order {
  createdAt: string;
  paymantStatus: string;
  products: Products[];
}
export interface PaymantData {
  UserId: string;
  ClientName: string;
  ClientLName: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
  cell: string;
  email: string;
}

export interface PaymentSuccessParams {
  Id: string;
  CCode: string;
  Amount: number;
  ACode: string;
  Order: string;
  Fild1: string;
  Fild2: string;
  Fild3: string;
  Bank: number;
  Payments: number;
  UserId: string;
  Brand: number;
  Issuer: number;
  L4digit: string;
  street: string;
  city: string;
  zip: string;
  cell: string;
  Coin: number;
  Tmonth: number;
  Tyear: number;
  Info: string;
  errMsg: string;
  Hesh: number;
  UID: string;
  SpType: number;
  BinCard: string;
}

export interface GoogleRes {
  email: string;
  given_name: string;
  family_name: string;
  id: string;
  picture: string;
  name: string;
  sub: string;
}

export interface Category {
  _id: string;
  title: string;
  otherLanguageTitle: {
    hebrew: string;
    russian: string;
    default: string;
  };
  description: string;
  otherLanguageDescription: {
    hebrew: string;
    russian: string;
    default: string;
  };
  image: string;
  images: [];
  products: Products[];
}


export interface Report {
  name: string;
  report: string;
  phone: string;
  reporterMail: string;
}