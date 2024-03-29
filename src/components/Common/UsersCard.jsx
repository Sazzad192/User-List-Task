import React from "react";
import { Link } from "react-router-dom";

const UsersCard = ({ userData }) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg mx-auto my-4 bg-white">
      <img
        className="rounded-full w-8 h-8 object-cover"
        src={userData.image}
        alt="avatar"
      />
      <div className="px-6 py-4 space-y-2">
        <Link
          to={`/user/${userData.id}`}
          className="font-bold text-xl mb-2 cursor-pointer"
        >{`${userData.firstName} ${userData.lastName}`}</Link>
        <p className="text-gray-700 text-base mb-2">{userData.email}</p>
        <p className="text-gray-700 text-base">
          Address:{" "}
          <span className="text-gray-800">{`${userData.address.state} ${userData.address.address} ${userData.address.city}`}</span>
        </p>
        <hr />
        <p className="text-gray-700 text-base font-semibold">
          {userData.company.name}
        </p>
      </div>
    </div>
  );
};
export default UsersCard;
