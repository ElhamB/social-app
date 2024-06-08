import React from "react";

const index = ({
  groupTitleIsTouched,
  groupTitle,
  onBlurTitleInput,
  onChangeTitleInput,
}) => {
  //validation
  const groupTitleIsValid = groupTitle.trim() !== "";
  const groupTitleIsInValid = !groupTitleIsValid && groupTitleIsTouched;

  const groupTitleInputClass = groupTitleIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <div className={groupTitleInputClass}>
      <label htmlFor="group-title">Group Title</label>
      <input
        id="group-title"
        value={groupTitle}
        onBlur={onBlurTitleInput}
        onChange={onChangeTitleInput}
      />
      {groupTitleIsInValid && (
        <p className="text-danger">Enter a group title</p>
      )}
    </div>
  );
};

export default index;
