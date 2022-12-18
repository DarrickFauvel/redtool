import { useContext, useEffect, useRef } from "react";
import { Context } from "../context";

const Form = () => {
  const { state, setState, handleChange } = useContext(Context);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textInput) {
      inputRef.current.focus();
      return;
    }
    setState((prevState) => ({
      ...prevState,
      barcodeValue: state.textInput,
    }));
    inputRef.current.focus();
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="control-group">
        <input
          type="text"
          id="textInput"
          name="textInput"
          value={state.textInput}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Enter location identifier..."
        />
        {/* <label htmlFor="textInput"><span>example:</span> 01A035M02</label> */}
      </div>
      <button className="btn" type="submit">
        GENERATE
      </button>
    </form>
  );
};

export default Form;
