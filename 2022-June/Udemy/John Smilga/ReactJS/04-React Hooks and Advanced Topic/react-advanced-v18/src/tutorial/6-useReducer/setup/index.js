import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModel(true);
      setPeople([
        ...people,
        { id: new Date().getTime().toString(), name: name },
      ]);
      setName("");
    } else {
      setShowModel(true);
    }
  };
  return (
    <>
      {showModel && <Modal />}

      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
