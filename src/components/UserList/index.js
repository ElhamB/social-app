import React from "react";
import "./userList.css";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
