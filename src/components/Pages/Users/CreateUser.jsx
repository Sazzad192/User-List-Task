import React, { useState } from "react";
import LayoutStyle from "../../Common/LayoutStyle";
import PageTitle from "../../Common/PageTitle";
import Button from "../../Common/Button";
import TextInputField from "../../Forms/TextInputField";
import FormikErrorBox from "../../Forms/FormikErrorBox";
import { useFormik } from "formik";
import APIKit from "../../../helpers/APIKit";
import toast from "react-hot-toast";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import UsersCard from "../../Common/UsersCard";

const initialValues = {
  image: "",
  address: {
    address: "",
    city: "",
    state: "",
  },
  firstName: "",
  lastName: "",
  email: "",
  company: {
    name: "",
  },
};

const CreateUser = () => {
  const [addedUser, setAddedUser] = useState({});

  const formik = useFormik({
    initialValues,

    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      const handleSuccess = ({ data }) => {
        setAddedUser(data);
      };

      const handleFailure = (error) => {
        throw error;
      };

      const promise = APIKit.user
        .postUser(values)
        .then(handleSuccess)
        .catch(handleFailure);

      return toast.promise(promise, {
        loading: "Loading....",
        success: "User Created Successfully",
        error: "Something wrong. Try again!",
      });
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, setFieldValue } =
    formik;

  return (
    <LayoutStyle className="space-y-6">
      <PageTitle>Create User</PageTitle>

      <section id="user-form">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="mt-2 flex items-center gap-x-3">
            {values.image ? (
              <img
                src={
                  typeof values.image === "string"
                    ? values.image
                    : URL.createObjectURL(values.image)
                }
                alt="avatar"
                className="h-20 w-20 bg-gray-300 rounded-full object-cover"
              />
            ) : (
              <UserCircleIcon
                className="h-20 w-20 text-gray-300"
                aria-hidden="true"
              />
            )}
            <label
              htmlFor="file"
              className="relative cursor-pointer rounded-md bg-white font-medium text-sm border py-2 px-3 text-gray-500 focus-within:outline-none"
            >
              <span>{values.image ? "Change" : "Upload"}</span>
              <input
                id="file"
                type="file"
                accept="image/*"
                className="sr-only"
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                }}
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="w-full">
              <TextInputField
                label="First Name"
                placeholder="Enter first name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="firstName" />
            </div>

            <div className="w-full">
              <TextInputField
                label="Last Name"
                placeholder="Enter last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="lastName" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="w-full">
              <TextInputField
                type="email"
                label="Email"
                placeholder="Enter mail address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="email" />
            </div>
            <div className="w-full">
              <TextInputField
                type="text"
                label="Company Name"
                placeholder="Enter company name"
                name="company.name"
                value={values.company.name}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="company.name" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="w-full">
              <TextInputField
                label="Address"
                placeholder="Enter address"
                name="address.address"
                value={values.address.address}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="address.address" />
            </div>

            <div className="w-full md:w-1/3">
              <TextInputField
                label="City"
                placeholder="Enter city"
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="address.city" />
            </div>

            <div className="w-full md:w-1/3">
              <TextInputField
                label="State"
                placeholder="Enter State"
                name="address.state"
                value={values.address.state}
                onChange={handleChange}
                onBlur={handleBlur}
                labelClassName="text-gray-700 text-base font-bold"
              />
              <FormikErrorBox formik={formik} field="address.state" />
            </div>
          </div>

          <Button className="w-full md:w-fit justify-center" type="submit" >
            Save
          </Button>
        </form>
      </section>

      {Object.keys(addedUser).length ? (
        <div className="pt-10 space-y-5">
            <hr />
          <p className="font-semibold text-lg">Added User</p>
          <UsersCard userData={addedUser} />
        </div>
      ) : null}
    </LayoutStyle>
  );
};

export default CreateUser;
