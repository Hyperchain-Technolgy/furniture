import { useState } from "react";

const IconButton = ({ Solid, Outline, color, handleAdd, element }) => {
  const [isSolid, setIsSolid] = useState(false);

  const toggleIcon = () => {
    setIsSolid(true);
    handleAdd(element)
  };

  return (
    <button
      onClick={toggleIcon}
      className="rounded-full bg-slate-50 bg-opacity-50 size-7 flex items-center justify-center duration-300 active:bg-opacity-100 active:duration-100 p-1"
    >
      {isSolid ? (
        <Solid className={color} />
      ) : (
        <Outline />
      )}
    </button>
  )
}

export default IconButton