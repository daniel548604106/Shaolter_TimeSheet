import React from "react";
import router from "next/router";
const Index = () => {
  return (
    <div className="flex items-center h-screen space-y-3">
      <div className="relative flex-1 bg-cover bg-red-400 bg-login_background  h-[500px]">
        <div className="absolute right-[100px] top-[100px] flex space-x-2 h-[120px]">
          <div className="flex flex-col justify-between">
            <input
              className="block bg-transparent input p-3  rounded-lg border w-[300px]"
              type="text"
            />
            <input
              className="block bg-transparent input p-3 rounded-lg border w-[300px]"
              type="text"
            />
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-[120px] h-full bg-white border rounded-lg uppercase"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
