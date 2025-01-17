import React from "react";
import {
  MastercardIcon,
  PayIcon,
  PaymentIcon,
  VisaIcon,
  VerIcon,
  LeafIcon,
  EcobazarIcon,
} from "../_atoms";

const Footer = () => {
  return (
    <div className="bg-green-950 ">
      <div className="max-w-screen-xl  mx-auto pt-6 md:pt-0 px-[3%]  lg:px-[7%] text-gray-400 flex flex-col">
        <div className=" pb-0 md:py-[60px] flex flex-col gap-4 items-start md:flex-col md:gap-y-6 lg:gap-x-[5%] lg:flex-row md:justify-between">
          <div className="w-full md:w-full lg:w-[35%] flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <LeafIcon />
              <EcobazarIcon location={"footer"} />
            </div>
            <p className="text-xs text-gray-600">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>

            <div>
              <p className="text-sm">
                (219) 555-0114 <span className="text-xs text-gray-600">or</span>{" "}
                Proxy@gmail.com{" "}
              </p>
            </div>
          </div>

          <div className="w-full  flex flex-col text-center md:text-left md:w-full md:flex-row lg:flex-row lg:w-[60%] ">
            <div className="border-t border-gray-700 py-2 md:border-none md:py-0  w-full md:w-[25%] text-xs font-medium flex flex-col gap-4 ">
              <h3 className="text-sm font-bold">My Account</h3>

              <div className="flex flex-col gap-3">
                <p>My Account</p>
                <p>Order History</p>
                <p>Shoping Cart</p>
                <p>Wishlist</p>
              </div>
            </div>

            <div className="border-t border-gray-700 py-2 md:border-none md:py-0 w-full md:w-[25%] text-xs font-medium flex flex-col gap-4  ">
              <h3 className="text-sm font-bold">Helps</h3>

              <div className="flex flex-col gap-3">
                <p>Contact</p>
                <p>Faqs</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
              </div>
            </div>

            <div className="border-t border-gray-700 py-2 md:border-none md:py-0 w-full md:w-[25%] text-xs font-medium flex flex-col gap-4">
              <h3 className="text-sm font-bold">Proxy</h3>

              <div className="flex flex-col gap-3">
                <p>About</p>
                <p>Shop</p>
                <p>Product</p>
                <p>Track Order</p>
              </div>
            </div>

            <div className="border-t border-gray-700 py-2 md:border-none md:py-0 w-full md:w-[25%] text-xs font-medium flex flex-col gap-4">
              <h3 className="text-sm font-bold">Categories</h3>

              <div className="flex flex-col gap-3">
                <p>Fruit & Vegetables</p>
                <p>Meat & Fish</p>
                <p>Bread & Bakery</p>
                <p>Beauty & Health</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 flex flex-col gap-y-4 md:flex-row md:justify-between ">
          <p className="text-xs text-gray-600">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>
          <div className="flex flex-row items-center gap-2">
            <PayIcon />
            <VisaIcon />
            <VerIcon />
            <MastercardIcon />
            <PaymentIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
