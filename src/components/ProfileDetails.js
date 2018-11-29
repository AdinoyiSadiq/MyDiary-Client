import React from 'react';

const ProfileDetails = (props) => {
  const { profile: { firstname, lastname, email, entryCount} } = props;
  return (
    <article className="profileSection">
      <div className="myProfile" id="profile">
        <header>
          <h1 id="fullname">{`${firstname} ${lastname}`}</h1>
        </header>
        <div className="firstName"><b>Name:</b> <span id="firstname">{`${firstname}`}</span></div>
        <div className="lastName"><b>Surname:</b> <span id="lastname">{`${lastname}`}</span></div>
        <div className="email"><b>Email:</b> <span id="email">{`${email}`}</span></div>
        <div className="entriesNumber"><b>Entries:</b> <span id="entryno">{`${entryCount}`}</span></div>
      </div>
    </article>
    );
};

export default ProfileDetails;