import React, { useRef } from "react";
import { XIcon } from "@heroicons/react/outline";
import Button from "../../Global/Button.js";
import Image from "next/image";
import useClickAway from "../../../hooks/useClickAway.js";
import TimeSheetPopupField from "./TimeSheetPopupField";
const TimeSheetPopup = ({ setTimeSheetOpen }) => {
  const elRef = useRef(null);
  useClickAway(elRef, () => setTimeSheetOpen(false));

  return (
    <div
      ref={elRef}
      className="relative space-y-3 flex flex-col rounded-lg bg-white p-5 shadow-md w-[600px] h-[600px]"
    >
      <div className="flex justify-end py-2 ">
        <Image
          src="/shoalter_logo.png"
          width={150}
          height={60}
          objectFit="contain"
        />
      </div>
      {/* Inputs */}
      <div className="flex-1">
        <div className="grid gap-16 gap-y-1 grid-cols-2">
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
          <TimeSheetPopupField />
        </div>
      </div>

      <div className="flex items-center w-full justify-between">
        <Button style="text-white bg-red-500" text="請假" />
        <div className="flex items-center space-x-3">
          <Button style="text-white bg-blue-500" text="送出" />
          <Button
            onClick={() => setTimeSheetOpen(false)}
            style="border "
            text="取消"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSheetPopup;
