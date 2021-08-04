import React from "react";
import { employee } from "../../../utils/mock_user.js";
import PersonalInfoField from "./PersonalInfoField";
const PersonalInfo = () => {
  const { name, role, id, department, job_title } = employee;
  return (
    <div>
      <div className="flex items-center space-x-3">
        <PersonalInfoField title="姓名" detail={name} />
        <PersonalInfoField title="員工編號" detail={id} />
      </div>
      <div className="flex items-center space-x-3">
        <PersonalInfoField title="部門" detail={department} />
        <PersonalInfoField title="職位" detail={job_title} />
      </div>
      <PersonalInfoField title="團隊" detail="HKTVMALL" />
    </div>
  );
};

export default PersonalInfo;
