export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JwtPayloadTypes {
  player: UserTypes;
  iat: number;
}
export interface checkoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface historyVoucherTopupTypes {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: string;
  thumbnail: string;
}
export interface historyPaymentTypes {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface historyTransactionTypes {
  _id: string;
  historyVoucherTopup: historyVoucherTopupTypes;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: historyPaymentTypes;
}

export interface TopUpCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}
