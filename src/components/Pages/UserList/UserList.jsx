import React, { useEffect, useState } from "react";
import LayoutStyle from "../../Common/LayoutStyle";
import PageTitle from "../../Common/PageTitle";
import APIKit from "../../../helpers/APIKit";

const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        APIKit.user.getUserList().then(data => setUserList(data.data.users))
    },[])
    
  return (
    <LayoutStyle>
      <section id="Page-Header" className="flex justify-between items-center">
        <PageTitle>User List</PageTitle>
      </section>
    
    <section>

        {
            
        }

    </section>

    </LayoutStyle>
  );
};
export default UserList;
