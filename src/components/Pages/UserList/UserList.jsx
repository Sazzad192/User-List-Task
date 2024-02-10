import React, { useEffect, useState } from "react";
import LayoutStyle from "../../Common/LayoutStyle";
import PageTitle from "../../Common/PageTitle";
import APIKit from "../../../helpers/APIKit";
import UsersCard from "../../Common/UsersCard";
import SearchByText from "../../Forms/SearchByText";
import { getLabelFromValue, sanitizeParams } from "../../../helpers/UtilKit";
import { useDebouncedCallback } from "use-debounce";
import SelectField from "../../Forms/SelectField";

const sortOptions = [
  { label: "Name", value: "" },
  { label: "Email", value: "email" },
  { label: "Company Name", value: "company.name" },
];

const UserList = () => {
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

  useEffect(()=>{
    setParams((prevParams) => ({
      ...prevParams,
      filter: filterValue,
    }));
  }, [filterValue])

  useEffect(() => {
    params
      ? APIKit.user
          .getUserList(sanitizeParams(params))
          .then((data) => setUserList(data.data.users))
      : APIKit.user.getUserList().then((data) => setUserList(data.data.users));
  }, [params]);

  return (
    <LayoutStyle className="space-y-6">
      <section id="Page-Header" className="flex justify-between items-center">
        <PageTitle>User List</PageTitle>
      </section>

      <section id="search-and-filter" className="flex items-center gap-2">
        <div className="w-1/3">
          <SelectField
            label="Sort the users"
            options={sortOptions}
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          />
        </div>
        <SearchByText
          label={`Search User ${filterValue ? getLabelFromValue(sortOptions, filterValue) : ""}`}
          placeholder="Search by user name"
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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {userList.map((items, i) => (
          <UsersCard key={i} userData={items} />
        ))}
      </section>
    </LayoutStyle>
  );
};
export default UserList;
