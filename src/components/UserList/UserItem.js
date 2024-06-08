import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addUser from "./add-user.svg";
import { addOrRemoveUser } from "../../store/user";
import Button from "../Ui/Button";
const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state) =>
    state.user.selectedUsers?.find?.((u) => u.id === user.id)
  )?.isSelected;
  const userInfo = {
    id: user.id,
    name: user.name,
    image: user.image,
    isSelected: true,
  };
  const hanleSelectUser = () => {
    dispatch(addOrRemoveUser(userInfo));
  };
  return (
    <div className="user-container">
      <div>
        <figure className="user-info">
          <div className="img-container">
            <img src={user.image} alt="" />
            <div
              className={`status ${user.status ? "online" : "offline"} `}
            ></div>
          </div>
          <figcaption>
            <span>{user.name}</span>
            <span>{user.title}</span>
          </figcaption>
        </figure>
      </div>
      <div>
        <Button
          className={`${isSelected ? "btn-added" : "btn-add"}`}
          onClick={hanleSelectUser}
        >
          {isSelected ? (
            <i className="fa fa-check-circle"></i>
          ) : (
            <img src={addUser} className="add-user-icon" alt="add-user-icon" />
          )}
          {isSelected ? " Added" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default UserItem;
