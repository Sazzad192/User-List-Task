import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col h-full mx-auto justify-center items-center" id="error-page">
      <h1 className="font-bold text-center text-xl">Oops!</h1>
      <p className="text-center font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

export default Error;
