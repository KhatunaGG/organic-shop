"use client";
import { ClobalContext } from "@/app/context/Context";
import React, { useContext } from "react";
import { FilterIcon, FreeIcon } from "../_atoms";
import Slider from "@mui/material/Slider";
import { Deals, Video, ImageSlider } from "@/app/components";

function Filter() {
  const context = useContext(ClobalContext);
  if (!context) return;
  const {
    data,
    categoryArray,
    checked,
    handleFilter,
    value,
    setValue,
    length,
  } = context;
  const price_range = [0, 20];

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="hidden w-[25%] md:flex flex-col items-start gap-4">
      <h2 className="text-gray-400 w-full text-right">
        {length} Results Found
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-center gap-4 bg-green-600 rounded-full p-[14px] px-8">
          <p className="text-white font-bold">Filter</p>
          <FilterIcon checked={checked} />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-green-950 text-sm md:text-lg">
            All Categories
          </h2>
          <div className="flex flex-col items-start gap-4">
            {categoryArray.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checked?.includes(item.toLowerCase())}
                  onChange={() => handleFilter(item.toLowerCase())}
                  className="rounded-full w-3 h-3 text-green-600 focus:ring-green-600"
                />
                <label className="cursor-pointer hover:cursor-pointer text-green-900">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Slider
        sx={{
          color: "success.main",
        }}
        getAriaLabel={() => "Price range"}
        onChange={handleChange}
        min={price_range[0]}
        max={price_range[1]}
        value={value}
        valueLabelDisplay="auto"
        step={1}
        className="w-[150px] lg:w-[180px] mt-4"
      />
      <Deals />
      <div className="w-full bg-green-200 text-green-950 flex items-center p-4 rounded-lg mt-6 gap-2 shadow-lg">
        <FreeIcon />
        <p className="font-medium">
          Free Shipping over <span className="font-bold">$50.00</span>
        </p>
      </div>
      <Video />
      <ImageSlider data={data} />
    </div>
  );
}

export default Filter;
