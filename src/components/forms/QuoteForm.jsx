import React, { useState } from "react";
import { calculateQuote } from "../../utils/QuoteCalulation";
import formStyles from "../../../styles/Form.module.css";

function QuoteForm({ handleQuote }) {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [isSmoker, setIsSmoker] = useState(false);

  const handleValidateInput = (e) => {
    const { name, value } = e.target;
    const digitRegex = /\d/g;

    const isValueValid = digitRegex.test(value);
    if (isValueValid) {
      if (name === "height") setHeight(parseInt(value));
      if (name === "weight") setWeight(parseInt(value));
    }
  };

  const handleCancel = () => {
    setAge("");
    setHeight("");
    setWeight("");
    setIsSmoker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { age, height, weight, isSmoker };
    const quote = calculateQuote(formData);
    handleQuote(quote);
  };

  return (
    <form onSubmit={handleSubmit} className={formStyles.form}>
      <div>
        <label>Select Your Age</label>
        <select name="age" value={age ? age : ""} onChange={(e) => setAge(parseInt(e.target.value))} required>
          {new Array(81).fill().map((array, index) => {
            if (index > 17) return <option key={index}>{index}</option>;
          })}
        </select>
      </div>

      <div>
        <label>Height (cm)</label>
        <input
          id="height"
          name="height"
          value={height ? height : ""}
          placeholder="Enter your Height (cm)..."
          onChange={handleValidateInput}
          required
        />
      </div>

      <div>
        <label>Weight (kg)</label>
        <input
          id="weight"
          name="weight"
          value={weight ? weight : ""}
          placeholder="Enter your weight (kg)"
          onChange={handleValidateInput}
          required
        />
      </div>

      <div>
        <label>Smoker</label>
        <input
          type="checkbox"
          id="smoker"
          name="smoker"
          defaultChecked={isSmoker ? isSmoker : false}
          onChange={() => setIsSmoker(!isSmoker)}
        />
      </div>

      <button onClick={handleCancel}>Cancel</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuoteForm;
