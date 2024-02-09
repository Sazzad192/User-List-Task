import React from "react";
import LayoutStyle from "../../Common/LayoutStyle";
import PageTitle from "../../Common/PageTitle";
import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {
  const userDetails = useLoaderData();
  const { image, firstName, lastName, email, phone, address, company } =
    userDetails.data;

  return (
    <LayoutStyle className="space-y-6">
      <section id="header-part" className="flex gap-2">
        <img
          className="rounded-full w-8 h-8 object-cover"
          src={image}
          alt="avatar"
        />
        <PageTitle>{`${firstName} ${lastName}`}</PageTitle>
      </section>

      <div className="flex flex-col md:flex-row justify-start items-start gap-6">
        <section id="main-section" className="space-y-3">
          <h3 className="font-semibold text-lg">Personal Information</h3>
          <div className="bg-white w-full md:w-fit p-6 rounded-md shadow-md space-y-3">
            <div>
              <p className="text-gray-700 text-base">Phone:</p>
              <p className="text-gray-800 font-semibold">{phone}</p>
            </div>

            <div>
              <p className="text-gray-700 text-base">Email:</p>
              <p className="text-gray-800 font-semibold">{email}</p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-700 text-base">Address</p>
              <p className="text-gray-800 font-semibold">{`${address.state} ${address.address} ${address.city}`}</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="font-semibold text-lg">Company Information</h3>

          <div className="bg-white w-full md:w-fit p-6 rounded-md shadow-md space-y-3">
            <p className="text-gray-700 text-base">Name:</p>
            <p className="text-gray-800 font-semibold">{company.name}</p>
          </div>
        </section>
      </div>
    </LayoutStyle>
  );
};
export default UsersDetails;
