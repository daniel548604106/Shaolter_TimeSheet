import React from "react";

const PersonalInfoField = ({ title, detail }) => {
  return (
    <div className="flex items-center space-x-3 w-[200px]">
      <p>{title}</p>
      <span>:</span>
      <p>{detail}</p>
    </div>
  );
};

export default PersonalInfoField;
