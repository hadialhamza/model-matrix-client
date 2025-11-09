import React from "react";
import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <BounceLoader color="green" />
    </div>
  );
};

export default Loading;
