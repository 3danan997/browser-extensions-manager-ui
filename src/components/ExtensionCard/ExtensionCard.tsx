import "./ExtensionCard.css";
import type React from "react";

// Props for the ExtensionCard component
export interface ExtensionCardProps {
  logo: string;
  name: string;
  description: string;
  isActive?: boolean;
  removeExtension: (name: string) => void;
  toggleActive: (name: string) => void;
}

// Single card for an extension
export const ExtensionCard: React.FC<ExtensionCardProps> = ({
  logo,
  name,
  description,
  isActive,
  removeExtension,
  toggleActive
}) => {
    return (
    <div className="extension-card" role="region" aria-label={`Extension card for ${name}`}> 
      <div className="card-main">
        {/* Extension logo */}
        <img className="card-logo" src={logo} alt={`${name} logo`} />
        <div className="card-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-btns">
        {/* Button to remove the extension */}
        <button 
          className="remove-btn" 
          type="button" 
          aria-label={`Remove ${name} extension`} 
          tabIndex={0}
          onClick={() => removeExtension(name)}
        >
          Remove
        </button>
        {/* Toggle for active/inactive */}
        <div className="active-toggle">
          <input
            type="checkbox"
            id={`active-toggle-${name}`}
            className="toggle-checkbox"
            checked={isActive}
            aria-checked={isActive}
            aria-label={`Toggle ${name} extension active state`}
            tabIndex={0}
            onChange={() => toggleActive(name)}
          />
          <label
            htmlFor={`active-toggle-${name}`}
            className="toggle-label"
            tabIndex={0}
            aria-label={isActive ? `Deactivate ${name}` : `Activate ${name}`}
          ></label>
        </div>
      </div>
    </div>
  );
};
