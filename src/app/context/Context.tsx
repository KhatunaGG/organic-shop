"use client";
import React, { createContext, useEffect, useState } from "react";
import { userInfoDataType } from "../components/CheckoutSection/CheckoutSection";
import { axiosInstance } from "../libs/axiosinstance";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";
import { usePriceCalculation } from "../hooks/usePriceCalculation";

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
  billingInformation: userInfoDataType;
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

export const ClobalContext = createContext<GlobalStateType | null>(null);

const Context = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [data, setData] = useState<DataType[]>([]);
  const [copiedData, setCopiedData] = useState<DataType[]>([]);
  const [shoppingCartItems, setShoppingCartItems] = useState<DataType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [favorites, setFavorites] = useState<DataType[]>([]);
  const [checked, setChecked] = useState<string | null>(null);
  const [value, setValue] = useState<number[]>([0, 20]);
  const [search, setSearch] = useState("");
  const [buttonInnerText, setButtonInnerText] = useState("");
  const [overlay, setOverlay] = useState("");
  const [length, setLength] = useState<number>(0);
  const [categoryArray, setCategoryArray] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState("");
  const [isRadioChecked, setIsRadioChecked] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [info, setInfo] = useState<InfoType | undefined>();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [userCookie, setUserCookie] = useState<string | undefined>();
  const [currentUser, setCurrentUser] = useState<CurrentUserType | undefined>();
  const [edit, setEdit] = useState(false);
  const [invoiceForEdit, setInvoiceForEdit] = useState<InfoType | undefined>();
  const [allInvoices, setAllInvoices] = useState<InfoType[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [calculatedTotalPrice, setCalculatedTotalPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [forPayment, setForPayment] = useState(0);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setData(res.data);
        setCopiedData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProductsData();

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites) || []);
    }

    const storedCartItems = localStorage.getItem("shoppingCartItems");
    if (storedCartItems) {
      setShoppingCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  async function getUserInfo(token: string | undefined) {
    try {
      const res = await axiosInstance.get("/auth/current-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCurrentUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const cookie = getCookie("accessToken");
    setAccessToken(cookie || null);
    if (cookie) {
      getUserInfo(cookie);
    } else {
      router.push("/");
    }
  }, [accessToken, router]);

  const handleRoute = () => {
    if (!accessToken) {
      router.push("/pages/signup");
    } else {
      router.push("/pages/checkout");
    }
  };

  const {
    orderTotalPrice,
    shipping: calculatedShipping,
    forPayment: calculatedForPayment,
  } = usePriceCalculation(shoppingCartItems);

  useEffect(() => {
    setCalculatedTotalPrice(orderTotalPrice);
    setShipping(calculatedShipping);
    setForPayment(calculatedForPayment);
  }, [orderTotalPrice, calculatedShipping, calculatedForPayment]);

  const getAllInvoices = async () => {
    try {
      const res = await axiosInstance.get("/purchases", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.data && res.data.length === 0) {
        setError("You have no purchases yet.");
        setAllInvoices([]);
      } else {
        setAllInvoices(res.data);
        setError(null);
      }
    } catch (error) {
      setError("An error occurred while fetching your purchases.");
      console.log(error);
    }
  };

  useEffect(() => {
    getAllInvoices();
  }, [accessToken]);

  const logout = () => {
    setCurrentUser(undefined);
    setAccessToken(null);
    setUserCookie(undefined);
    deleteCookie("accessToken");
    setShoppingCartItems([]);
    setTotalCount(0);
    setTotalPrice(0);
    localStorage.removeItem("orderInfo");
    localStorage.removeItem("shoppingCartItems");
    setInfo(undefined);
    setInvoiceForEdit(undefined);
    setShoppingCartItems([]);
    router.push("/");
  };

  useEffect(() => {
    const itemTotalPrice = shoppingCartItems.reduce((acc, el) => {
      const itemPrice = el.sale || el.price;
      const itemTotal = itemPrice * (el.count || 1);
      return acc + itemTotal;
    }, 0);
    setTotal(itemTotalPrice);
  }, [shoppingCartItems]);

  useEffect(() => {
    if (data && value) {
      setLength(
        data.filter((item) => item.price >= value[0] && item.price <= value[1])
          .length
      );
    }
  }, [data, value]);

  const handleRadioChange = (pay: string) => {
    if (isRadioChecked === pay) {
      setIsRadioChecked(null);
    } else {
      setIsRadioChecked(pay);
    }
  };

  const handleChange = (path: string) => {
    if (isChecked === path) {
      setIsChecked("");
    } else {
      setIsChecked(path);
    }
  };

  useEffect(() => {
    const categorySet = new Set(data?.map((product) => product.category));
    setCategoryArray(Array.from(categorySet));
  }, [data]);

  const handleFilter = (categoryItem: string) => {
    console.log(categoryItem, "categoryItem");

    if (checked === categoryItem) {
      setChecked(null);
      setData(copiedData);
    } else {
      setChecked(categoryItem);
      setData(
        copiedData.filter(
          (item) => item.category.toLowerCase() === categoryItem
        )
      );
    }
  };

  useEffect(() => {
    if (shoppingCartItems.length > 0) {
      const totalCount = shoppingCartItems.reduce(
        (acc, item) => acc + (item.count || 0),
        0
      );
      const totalPrice = shoppingCartItems.reduce(
        (acc, item) => acc + (item.count || 0) * item.price,
        0
      );
      setTotalCount(totalCount);
      setTotalPrice(totalPrice);
    } else {
      setTotalCount(0);
      setTotalPrice(0);
    }
  }, [shoppingCartItems]);

  const getFavorites = (item: DataType) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.includes(item)
        ? prev.filter((el) => el._id !== item._id)
        : [...prev, item];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  const addToCart = (productItem: DataType) => {
    if (!productItem) return;

    const isInCart = shoppingCartItems.some(
      (item) => item._id === productItem._id
    );

    if (isInCart) {
      setShoppingCartItems((prev) => {
        const updatedItems = prev.map((item) =>
          item._id === productItem._id
            ? { ...item, count: (item.count || 0) + 1 }
            : item
        );
        localStorage.setItem("shoppingCartItems", JSON.stringify(updatedItems));
        return updatedItems;
      });
    } else {
      setShoppingCartItems((prev) => {
        const newItem = { ...productItem, count: 1 };
        const updatedCartItems = prev ? [...prev, newItem] : [newItem];
        localStorage.setItem(
          "shoppingCartItems",
          JSON.stringify(updatedCartItems)
        );
        return updatedCartItems;
      });
    }
  };

  const increment = (countPlusId: string) => {
    setShoppingCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === countPlusId
          ? { ...item, count: (item.count || 0) + 1 }
          : item
      );
      localStorage.setItem("shoppingCartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const decrement = (countMinusId: string) => {
    setShoppingCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === countMinusId
          ? { ...item, count: Math.max(0, (item.count || 0) - 1) }
          : item
      );
      localStorage.setItem("shoppingCartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeCartItem = (removeId: string) => {
    const updatedShoppingCart = shoppingCartItems.filter(
      (item) => item._id !== removeId
    );
    setShoppingCartItems(updatedShoppingCart);
    localStorage.setItem(
      "shoppingCartItems",
      JSON.stringify(updatedShoppingCart)
    );
  };

  const editInvoice = async (id: string) => {
    try {
      const res = await axiosInstance.get(`/purchases/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 201 || res.status === 200) {
        setInvoiceForEdit(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClobalContext.Provider
      value={{
        data,
        addToCart,
        shoppingCartItems,
        totalPrice,
        setTotalPrice,
        increment,
        decrement,
        setTotalCount,
        totalCount,
        removeCartItem,
        setShoppingCartItems,
        getFavorites,
        favorites,
        categoryArray,
        checked,
        handleFilter,
        value,
        setValue,
        search,
        setButtonInnerText,
        length,
        setOverlay,
        overlay,
        handleChange,
        isChecked,
        setIsChecked,
        setLength,
        handleRadioChange,
        isRadioChecked,
        setInfo,
        info,
        total,
        setAccessToken,
        userCookie,
        setCurrentUser,
        currentUser,
        logout,
        accessToken,
        setCategoryArray,
        setCopiedData,
        setSearch,
        setData,
        copiedData,
        handleRoute,
        setEdit,
        edit,
        editInvoice,
        invoiceForEdit,
        setIsRadioChecked,
        setInvoiceForEdit,
        setAllInvoices,
        allInvoices,
        calculatedTotalPrice,
        shipping,
        forPayment,
      }}
    >
      {children}
    </ClobalContext.Provider>
  );
};

export default Context;
