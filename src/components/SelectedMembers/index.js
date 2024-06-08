import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./selectedMember.css";
import SelectedMemberItem from "./SelectedMemberItem";

const SelectedMembers = () => {
  const limitPreview = 6;
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const count = selectedUsers.length - limitPreview;
  return (
    <Fragment>
      {selectedUsers.length === 0 && (
        <div className="no-item">Selected members will display here</div>
      )}
      <div className="selected-container">
        {selectedUsers.slice(0, limitPreview).map((user) => (
          <SelectedMemberItem user={user} key={user.id} />
        ))}
        {selectedUsers.length > limitPreview && (
          <div className="selected-counter">+{count}</div>
        )}
      </div>
    </Fragment>
  );
};

export default SelectedMembers;
