import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../component/ErrorModal";
import "./ProfileForm.css";

const ProfileForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [invalid, setInvalid] = useState();

  const nameChanger = (e) => {
    setName(e.target.value);
  };
  const ageChanger = (e) => {
    setAge(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setInvalid({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
      return console.log("empty spaces");
    }
    if (+age < 18) {
      setInvalid({
        title: "Invalid Number Input",
        message: "Please enter valid age not less than 18",
      });
      return;
    }
    const userData = {
      name: name,
      age: age,
    };
    props.onSaveData(userData);
    setName("");
    setAge("");
    // console.log(userData);
  };

  const handleConfirm = () => {
    setInvalid(null);
  };
  return (
    <div>
      {invalid && (
        <ErrorModal
          title={invalid.title}
          message={invalid.message}
          onConfirm={handleConfirm}
        />
      )}
      <Card className="card">
        <form className="form-control" onSubmit={handleForm}>
          <div>
            <label htmlFor="name"> Name:</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={nameChanger}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              required
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={ageChanger}
              min="10"
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default ProfileForm;
