import { useState } from "react";
import { GoCodescan } from "react-icons/go";
import "./ShowTools.css";

const ShowTools = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <div>
      <div className="tooltip-container">
        <GoCodescan className="icon-code" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        <div className={`tooltip ${showTooltip ? "visible" : ""}`}>
          <img src={props.src} alt="code" />
        </div>
      </div>
    </div>
  );
};

export default ShowTools;