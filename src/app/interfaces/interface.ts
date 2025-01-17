export type GlobalStateType = {
  data: DataType[];
  addToCart: (value: DataType) => void;
  shoppingCartItems: DataType[];
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  increment: (_id: string) => void;
  decrement: (_id: string) => void;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  removeCartItem: (_id: string) => void;
  setShoppingCartItems: React.Dispatch<React.SetStateAction<DataType[]>>;
  getFavorites: (value: DataType) => void;
  favorites: DataType[];
  categoryArray: String[];
  checked: string | null;
  handleFilter: (str: string) => void;
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  search: string;
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  setButtonInnerText: React.Dispatch<React.SetStateAction<string>>;
  setOverlay: React.Dispatch<React.SetStateAction<string>>;
  overlay: string;
  handleChange: (value: string) => void;
  isChecked: string;
  setIsChecked: React.Dispatch<React.SetStateAction<string>>;
  handleRadioChange: (value: string) => void;
  isRadioChecked: string | null;
  info: InfoType | undefined;
  setInfo: React.Dispatch<React.SetStateAction<InfoType | undefined>>;
  total: number;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  userCookie: string | undefined;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<CurrentUserType | undefined>
  >;
  currentUser: CurrentUserType | undefined;
  logout: () => void;
  accessToken: string | null;
  setCategoryArray: React.Dispatch<React.SetStateAction<string[]>>;
  setCopiedData: React.Dispatch<React.SetStateAction<DataType[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  copiedData: DataType[];
  handleRoute: () => void;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  editInvoice: (value: string) => void;
  invoiceForEdit: InfoType | undefined;
  setIsRadioChecked: React.Dispatch<React.SetStateAction<string | null>>;
  setInvoiceForEdit: React.Dispatch<React.SetStateAction<InfoType | undefined>>;
  setAllInvoices: React.Dispatch<React.SetStateAction<InfoType[]>>;
  allInvoices: InfoType[] | null;
  calculatedTotalPrice: number;
  shipping: number;
  forPayment: number;
};

export type RatingType = {
  rate: number;
  count: number;
};

export type DataType = {
  name: string;
  _id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
  count: number;
  sale?: number;
};

export type InfoType = {
  billingInformation: userInfoDataType; ///?
  paymentMethod: string | null;
  orders: DataType[];
  orderTotalPrice: number;
  shipping: number;
  forPayment: number;
  orderId: string;
  _id?: string | undefined;
  userId?: string;
};

export type CurrentUserType = {
  _id: string;
  name: string;
  email: string;
  purchases: string[];
};

export type BagIconPropsType = {
  width: string;
  hight: string;
};

export type EcobazarIconPropsType = {
  location: string;
};

export type FilterIconPropsType = {
  checked: string | null;
};

export type HeartIconPropsType = {
  product?: DataType;
  width?: string;
  height?: string;
};

export type CartItemPropsType = {
  cartItem: DataType;
};

export type CartTotalPropsType = {
  totalPrice: number;
};

export type userInfoDataType = {
  name: string;
  lastName: string;
  company?: string;
  street: string;
  country?: string | null;
  state?: string;
  postCode: string;
  email: string;
  phone: string;
};

export type ImageSliderPropsType = {
  data: DataType[];
};

export type SignInType = {
  email: string;
  password: string;
};

export type ArrType = {
  title: string;
  count: number | undefined;
  price: number;
  total: number;
};

export type OrderSummeryPropsType = {
  onSubmit: (e: React.BaseSyntheticEvent) => Promise<void>;
};

export type ProductPropsType = {
  product: DataType;
};

export type ProductDescType = {
  params: string;
};

export type signUpType = {
  name: string;
  email: string;
  password: string;
};

export type SecondaryButtonPropsType = {
  text: string;
  location: string;
};

export type VideoPropsType = {
  title: string;
  videoURL: string;
  duration: number;
  view: number;
  img: string;
}[];
