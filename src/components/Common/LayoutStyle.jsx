import React from "react";
import cn from "../../helpers/UtilKit";

const LayoutStyle = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto p-4 w-full sm:px-6 lg:px-10 max-w-7xl min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
};
export default LayoutStyle;
