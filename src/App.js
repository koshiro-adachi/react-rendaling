import { useState, useCallback } from "react";
import { ChildArea } from "../ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <ChildArea open={open} onClickClose={onClickClose} />
      <button onClick={onClickOpen}>表示</button>
    </div>
  );
}
