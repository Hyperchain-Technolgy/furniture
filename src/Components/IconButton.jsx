import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const IconButton = ({ Solid, Outline, color, handleAdd, prodId }) => {
  const [isSolid, setIsSolid] = useState(false);
  const wishlist = useSelector(state => state.userInfo?.userInfo?.getaUser?.wishlist)

  const toggleIcon = () => {
    setIsSolid(true);
    handleAdd(prodId)
  };

  useEffect(() => {
    if (wishlist && wishlist.includes(prodId)) {
      setIsSolid(true);
    }

  }, [wishlist, prodId]);

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

IconButton.propTypes = {
  Solid: PropTypes.elementType.isRequired,
  Outline: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired,
  prodId: PropTypes.string.isRequired
};

export default IconButton

