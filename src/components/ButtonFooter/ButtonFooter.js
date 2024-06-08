import React from "react";
import { useSelector } from "react-redux";
import Button from "../Ui/Button";
const ButtonFooter = ({ onDiscard, groupTitleIsValid }) => {
  //disable create button if selected user is empty
  const selectedUsers = useSelector((state) => state.user.selectedUsers);
  const disabledCreate = selectedUsers.length === 0 || !groupTitleIsValid;
  return (
    <div className="button-container">
      <Button className="btn-outline-primary" onClick={onDiscard}>
        Discard
      </Button>
      <Button className="btn-primary" disabled={disabledCreate} type="submit">
        Create
      </Button>
    </div>
  );
};

export default ButtonFooter;
