import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo.js";
import Overlay from "../../Global/Overlay.js";
import TimeSheetPopup from "./TimeSheetPopup.js";
import Button from "../../Global/Button.js";
const Index = () => {
  const [timeSheetOpen, setTimeSheetOpen] = useState(false);

  return (
    <div className="p-[30px] space-y-5">
      {timeSheetOpen && (
        <Overlay>
          <TimeSheetPopup setTimeSheetOpen={setTimeSheetOpen} />
        </Overlay>
      )}
      <PersonalInfo />
      <Button
        onClick={() => setTimeSheetOpen(true)}
        text="新增"
        style="text-white bg-blue-300"
      />
    </div>
  );
};

export default Index;
