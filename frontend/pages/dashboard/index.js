import React, { useState, useEffect } from "react";
import Image from "next/image";
import DepartmentManager from "../../components/Dashboard/DepartmentManager/Index.js";
import Employee from "../../components/Dashboard/Employee/Index.js";
import GeneralManager from "../../components/Dashboard/GeneralManager/Index.js";
const index = () => {
  const [status, setStatus] = useState("EM");
  return (
    <div className="w-screen h-screen">
      {status === "DM" && <DepartmentManager />}
      {status === "GM" && <GeneralManager />}
      {status === "EM" && <Employee />}
    </div>
  );
};

export default index;
