import React, { useEffect, useState } from "react";
import LayoutStyle from "../../Common/LayoutStyle";
import PageTitle from "../../Common/PageTitle";
import APIKit from "../../../helpers/APIKit";
import UsersCard from "../../Common/UsersCard";
import SearchByText from "../../Forms/SearchByText";
import { getLabelFromValue, sanitizeParams } from "../../../helpers/UtilKit";
import { useDebouncedCallback } from "use-debounce";
import SelectField from "../../Forms/SelectField";
import { Link } from "react-router-dom";
import Button from "../../Common/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

const sortOptions = [
  { label: "Name", value: "" },
  { label: "Email", value: "email" },
  { label: "Company Name", value: "company.name" },
];

const UserList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [params, setParams] = useState({
    filter: "",
    search: "",
  });

  const debounced = useDebouncedCallback((value) => {
    setParams((prevParams) => ({
      ...prevParams,
      search: value,
    }));
  }, 400);

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      filter: filterValue,
    }));
  }, [filterValue]);

  useEffect(() => {
    setIsLoading(true); // Set loading to true when effect starts

    params
      ? APIKit.user.getUserList(sanitizeParams(params)).then((data) => {
          setUserList(data.data.users);
          setIsLoading(false);
        })
      : APIKit.user.getUserList().then((data) => {
          setUserList(data.data.users);
          setIsLoading(false);
        });
  }, [params]);

  return (
    <LayoutStyle className="space-y-6">
      <section id="Page-Header" className="flex justify-between items-center">
        <PageTitle>User List</PageTitle>
        <Link to="/users/create">
          <Button className="gap-2" variant="outline">
            <PlusIcon className="w-5" /> Create
          </Button>
        </Link>
      </section>

      <section
        id="search-and-filter"
        className="flex flex-col md:flex-row items-center gap-2"
      >
        <div className="w-full md:w-1/3">
          <SelectField
            label="Sorted By"
            options={sortOptions}
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          />
        </div>
        <SearchByText
          label={`Search By ${
            filterValue ? getLabelFromValue(sortOptions, filterValue) : "Name"
          }`}
          placeholder="Search users"
          onChange={(e) => {
            debounced(e.target.value);
            setSearchKey(e.target.value);
          }}
          value={searchKey}
          onReset={() => {
            setParams((prevParams) => ({
              ...prevParams,
              search: "",
            }));
            setSearchKey("");
          }}
        />
      </section>

      <section>
        {isLoading ? (
          <p className="text-center font-semibold text-xl text-gray-700 pt-10">
            Loading.....
          </p>
        ) : userList.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {userList.map((items, i) => (
              <UsersCard key={i} userData={items} />
            ))}
          </div>
        ) : (
          <p className="text-center font-semibold text-xl text-gray-700 pt-10">
            No User Found
          </p>
        )}
      </section>
    </LayoutStyle>
  );
};
export default UserList;
