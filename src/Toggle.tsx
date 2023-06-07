import { useState } from "react";
import "./Toggle.css";
interface IAccordion {
  title: string;
  children: React.ReactNode 
}
const Accordion = ({ title, children }: IAccordion) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      <button data-testid="visibleBtn" onClick={() => setVisible((visible) => !visible)}>
        {visible ? "🎅" : "🎄"}
      </button>
      {visible && <h3 className="text">{children}</h3>}
    </div>
  );
};

export default Accordion;
