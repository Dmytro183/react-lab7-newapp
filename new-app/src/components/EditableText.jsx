import React, { useState } from 'react';

function EditableText({ initialValue = "Натисніть для редагування", multiline = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        multiline ? (
          <textarea
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        )
      ) : (
        <p onClick={handleTextClick}>{value}</p>
      )}
    </div>
  );
}

export default EditableText;
