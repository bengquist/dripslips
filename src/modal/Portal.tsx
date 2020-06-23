import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal: React.FC = ({ children }) => {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    const div = document.createElement("div");
    div.style.display = "contents";
    document.body.append(div);
    setContainer(div);
    return () => div.remove();
  }, []);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

export default Portal;
