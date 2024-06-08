import React from 'react'

const SelectedMemberItem = ({user}) => {
  return (
    <figure className="user-selected">
    <div>
      <img src={user.image} alt={user.name} />
      <span>
        <i className="fa fa-check-circle"></i>
      </span>
    </div>
    <figcaption>{user.name}</figcaption>
  </figure>
  )
}

export default SelectedMemberItem
