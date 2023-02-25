import React, { useState } from "react";
import { AppContext, useAppContext } from "../Context/appContext";

const Create = () => {
  const { createStudent } = useAppContext(AppContext);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createStudent({ id: Date.now(), name, age });
    setName("");
    setAge("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Name"
        />
        <label>Name</label>
      </div>
      <div className="form-floating">
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          className="form-control"
          placeholder="Age"
        />
        <label>Age</label>
      </div>

      <div className="d-grid gap-2 mt-2">
        <button className="btn btn-primary" type="submit">
          <h2>+</h2>
        </button>
      </div>
    </form>
  );
};

export default Create;
