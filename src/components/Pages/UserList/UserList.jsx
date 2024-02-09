import React, { useEffect, useState } from "react";
import LayoutStyle from "../../Common/LayoutStyle";
import PageTitle from "../../Common/PageTitle";
import APIKit from "../../../helpers/APIKit";
import UsersCard from "../../Common/UsersCard";

const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        APIKit.user.getUserList().then(data => setUserList(data.data.users))
    },[])

    console.log(userList)
    
  return (
    <LayoutStyle>
      <section id="Page-Header" className="flex justify-between items-center">
        <PageTitle>User List</PageTitle>
      </section>
    
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {
        userList.map((items, i) => <UsersCard key={i} userData={items}/>)
      }
    </section>

    </LayoutStyle>
  );
};
export default UserList;
