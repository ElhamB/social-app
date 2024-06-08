import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import GroupTitleInput from "../../components/GroupTitleInput";
import SelectedMember from "../../components/SelectedMembers";
import UserFilter from "../../components/UserFilter";
import ButtonFooter from "../../components/ButtonFooter/ButtonFooter";
import UserList from "../../components/UserList";
import useUnsavedChangesWarning from "../../hooks/useUnsavedChangesWarning";
import useCreateCsv from "../../hooks/useCreateCsv";
import { clearSelectedUsers } from "../../store/user";

import "./createGroup.css";

const CreateGroupPage = () => {
  const dispatch = useDispatch();
  const selectedUsers = useSelector((state) => state.user.selectedUsers);

  const [groupTitle, setGroupTitle] = useState("");
  const [groupTitleIsTouched, setGroupTitleIsTouched] = useState(false);
  const groupTitleIsValid = groupTitle.trim() !== "";
 
  const setEmptyInput=()=> setGroupTitle("");
  const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning(setEmptyInput);

  const handleGroupTitleBlur = () => {
    setGroupTitleIsTouched(true);
  };
  const handleGroupTitleChange = (e) => {
    setGroupTitle(e.target.value);
    setDirty();
  };
  const handleDiscard = () => {
    Prompt();
  };
  useEffect(() => {
    if (selectedUsers.length > 0) {
      setDirty();
    }
  }, [selectedUsers, setDirty]);

  //csv
  const { downloadCsvFile } = useCreateCsv();
  const getData = () => {
    var cvRows = [];
    let groupMembers = [];
    if (selectedUsers.length > 0 && groupTitle) {
      for (var i = 0; i < selectedUsers.length; i++) {
        cvRows.push(
          selectedUsers[i].name,
          groupTitle,
          "Elham Bagheri",
          new Date().toLocaleString()
        );
      }
      const chunkSize = 4;
      for (let i = 0; i < cvRows.length; i += chunkSize) {
        const chunk = cvRows.slice(i, i + chunkSize);
        groupMembers.push(chunk);
      }
      return groupMembers;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGroupTitleIsTouched(true);
    if (!groupTitleIsValid) {
      return;
    }
    const data = getData();
    setPristine();
    downloadCsvFile(data);
    setGroupTitle("");
    setGroupTitleIsTouched(false);
    dispatch(clearSelectedUsers());

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <GroupTitleInput
          groupTitle={groupTitle}
          groupTitleIsTouched={groupTitleIsTouched}
          onChangeTitleInput={handleGroupTitleChange}
          onBlurTitleInput={handleGroupTitleBlur}
        />
        <SelectedMember />
        <UserFilter />
        <UserList />
        <ButtonFooter
          onDiscard={handleDiscard}
          groupTitleIsValid={groupTitleIsValid}
        />
      </form>
    </div>
  );
};

export default CreateGroupPage;
