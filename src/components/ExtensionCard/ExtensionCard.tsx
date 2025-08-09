import "./ExtensionCard.css";
import type React from "react";

export interface ExtensionCardProps {
  logo: string;
  name: string;
  description: string;
  isActive?: boolean;
  index: number;
  removeExtension: (name: string) => void;
  toggleActive: (name: string) => void;
}
export const ExtensionCard: React.FC<ExtensionCardProps> = ({
  logo,
  name,
  description,
  isActive,
  removeExtension,
  toggleActive
}) => {
    
    return (
    <div className="extension-card">
      <div className="card-main">
        <img className="card-logo" src={logo} alt={`${name}-logo`} />
        <div className="card-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-btns">
        <button className="remove-btn" type="button" onClick={() => removeExtension(name)}>
          Remove
        </button>
        <div className="active-toggle">
          <input
            type="checkbox"
            id={`active-toggle-${name}`}
            className="toggle-checkbox"
            checked={isActive}
            onChange={() => toggleActive(name)}
          />
          <label
            htmlFor={`active-toggle-${name}`}
            className="toggle-label"
          ></label>
        </div>
      </div>
    </div>
  );
};
