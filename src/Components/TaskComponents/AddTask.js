import { useState } from "react";

import { useDispatch } from "react-redux";
import { addNewTASK } from "../../Redux/Actions";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTASK(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter new Task..."
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
