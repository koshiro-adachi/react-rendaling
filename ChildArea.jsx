import { memo } from "react";
const style = {
  width: "100%",
  heigth: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChiledAreaがレンダリングされた");

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("111");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>a</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
