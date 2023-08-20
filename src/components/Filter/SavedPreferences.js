import React, { useState } from "react";

const SaveReference = ({ result, onSave }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave(result);
    setSaved(true);
  };

  return (
    <div>
      {saved ? <span>Saved</span> : <button onClick={handleSave}>Save</button>}
    </div>
  );
};

export default SaveReference;
