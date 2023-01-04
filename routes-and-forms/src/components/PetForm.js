import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [colour, setColor] = useState("");
  const [submitted, setSubmitted] = useState(false);

function handleSubmit (event) {
  event.preventDefault();

  setName (0)
  setAge ("")
  setColor ("")

  setSubmitted(true);
}




  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Pet's Name:
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>
        </div>
        { <label>
            Pet's age:
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>}

        {<label>
            Pet's colour:
            <input
              type="colour"
              value={colour}
              onChange={(e) => {
                setColor(e.target.value);
                setSubmitted(false);
              }}
            />
          </label>}

        <input type="submit" value="Submit" id="submit-button" />
      </form>
      <div id="results">


      {
      submitted ? <div> Thank you for submitting </div> : null
      }

        <h3>Results</h3>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      <div>Colour: {colour}</div>
        <br />
      </div>
    </div>
  );
};

export default PetForm;
