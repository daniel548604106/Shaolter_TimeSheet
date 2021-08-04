import React, { useState, useEffect } from "react";

const TimeSheetPopupField = () => {
  const [hour, setHour] = useState(0);
  useEffect(() => {
    hour === "" && setHour(0);
  }, [hour]);
  return (
    <div className="flex items-center space-x-3">
      <p>New Project</p>
      <input
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        className="border flex-1 py-1 px-2 rounded-lg"
        type="number"
        min="0"
        max="8"
      />
      <p>/ Hr</p>
    </div>
  );
};

export default TimeSheetPopupField;
