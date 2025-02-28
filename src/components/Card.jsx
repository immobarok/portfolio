// components/Card.js
import React from "react";
import Button from "./Button";

const Card = ({ imageUrl, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="w-[400px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}

      {/* Content Section */}
      <div className="px-6 py-4">
        {/* Title */}
        {title && (
          <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-base">{description}</p>
        )}
      </div>

      {/* Button Section */}
      {buttonText && (
        <div className="px-6 pb-4">
          <Button
            onClick={onButtonClick}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Card;