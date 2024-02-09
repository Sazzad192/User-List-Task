import React from "react";

const UsersCard = ({userData}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg mx-auto my-4 bg-white">
      <img className="rounded-full w-8 h-8 object-cover" src={userData.image} alt="avatar" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${userData.firstName} ${userData.lastName}`}</div>
        <p className="text-gray-700 text-base mb-2">{userData.email}</p>
        <p className="text-gray-700 text-base">{userData.address.address}</p>
        <p className="text-gray-700 text-base">{userData.company.name}</p>
      </div>
    </div>
  );
};
export default UsersCard;