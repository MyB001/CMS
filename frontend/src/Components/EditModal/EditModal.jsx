import ReactDOM from "react-dom";

export default function EditModal({children}) {
  return ReactDOM.createPortal(
    children
    ,document.getElementById("modal")
  );
}
