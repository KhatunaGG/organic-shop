// "use client";
// import { ClobalContext } from "@/app/context/Context";
// import { useRouter } from "next/navigation";
// import React, { useContext, useState } from "react";

// type ButtonPropsType = {
//   text: string;
//   width?: string;
//   rounded?: string;
//   paddingY?: string;
// };



// const Button = ({ text, width, rounded, paddingY }: ButtonPropsType) => {
  
//   const context = useContext(ClobalContext);
//   const router = useRouter();
//   if (!context) return;
//   const { setButtonInnerText, shoppingCartItems, info, total } = context;
//   setButtonInnerText(text);

//   return (
//     <button
//       onClick={() => {
//         if (text === "Proceed to checkout") {
//           router.push("/pages/checkout");
//           // getInvoice()

//         }
//       }}
//       type={text === 'Place Order' ? "submit" : "button"}
//       style={{
//         width: width,
//         borderRadius: rounded,
//         paddingTop: paddingY,
//         paddingBottom: paddingY,
//       }}
//       className="outline-none px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-yellow-300 
//       border border-yellow-300 rounded-r-md
//       focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300"
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;




// "use client";
// import { ClobalContext } from "@/app/context/Context";
// import { useRouter } from "next/navigation";
// import React, { useContext, useEffect } from "react";

// type ButtonPropsType = {
//   text: string;
//   width?: string;
//   rounded?: string;
//   paddingY?: string;
// };

// const Button = ({ text, width, rounded, paddingY }: ButtonPropsType) => {
//   const context = useContext(ClobalContext);
//   const router = useRouter();

//   if (!context) return null; 
//   const { setButtonInnerText } = context;


//   useEffect(() => {
//     setButtonInnerText(text);
//   }, [text, setButtonInnerText]);

//   return (
//     <button
//       onClick={() => {
//         if (text === "Proceed to checkout") {
//           router.push("/pages/checkout");
//         }
//       }}
//       type={text === 'Place Order' ? "submit" : "button"}
//       style={{
//         width: width,
//         borderRadius: rounded,
//         paddingTop: paddingY,
//         paddingBottom: paddingY,
//       }}
//       className="outline-none px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-yellow-300 
//       border border-yellow-300 rounded-r-md
//       focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300"
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;




'use client'
import React, { useContext, useEffect, useState } from "react";
import { ClobalContext } from "@/app/context/Context";
import { useRouter } from "next/navigation";

type ButtonPropsType = {
  text: string;
  width?: string;
  rounded?: string;
  paddingY?: string;
};

const Button = ({ text, width, rounded, paddingY }: ButtonPropsType) => {
  const context = useContext(ClobalContext);
  const router = useRouter();
  const [buttonText, setButtonText] = useState(text);

  useEffect(() => {
    setButtonText(text); // Update state with the new text

    return () => {
      console.log('Cleanup');
    };
  }, [text]); // Dependency on text

  if (!context) {
    return <div>Loading...</div>;
  }

  return (
    <button
      onClick={() => {
        if (buttonText === "Proceed to checkout") {
          router.push("/pages/checkout");
        }
      }}
      type={buttonText === 'Place Order' ? "submit" : "button"}
      style={{
        width: width,
        borderRadius: rounded,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
      className="outline-none px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-yellow-300 
      border border-yellow-300 rounded-r-md
      focus:outline-none focus:ring-2 focus:ring-yellow-300 active:from-yellow-300"
    >
      {buttonText}
    </button>
  );
};

export default Button;
