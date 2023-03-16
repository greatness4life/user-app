import React, { useState } from "react";
import Card from "../UI/Card";
// import { userData } from "../userData";
import classes from "./Profile.module.css";
import ProfileForm from "./ProfileForm";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);

  const handleSave = (saveProfile) => {
    const userProfile = {
      ...saveProfile,
      id: Math.random().toString(),
    };
    console.log(userProfile);
    setProfiles([userProfile, ...profiles]);
  };

  return (
    <Card className={classes.content}>
      <ProfileForm onSaveData={handleSave} />
      {profiles.map((profile) => {
        const { name, age, id } = profile;
        return (
          <ul key={id}>
            <li className={classes.users}>
              <div className={classes.items}>
                <h3>Full Name:</h3>
                {name}
              </div>
              <div className={classes.items}>
                <h3>Age:</h3>
                {age}years
              </div>
            </li>
          </ul>
        );
      })}
    </Card>
  );
};

export default Profile;
