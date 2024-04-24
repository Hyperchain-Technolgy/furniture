import { useLocation } from "react-router-dom";
import CurrentProduct from "../Components/CurrentProduct";
import { useEffect } from "react";
import { getProductById } from "../feature/specificProduct/SpecificProduct";
import { useDispatch, useSelector } from "react-redux";

function CurrentProductPage() {
  const { pathname } = useLocation();
  const dispatch = useDispatch()

  const SpecProduct = useSelector(state => state.specificProduct.product)

  useEffect(() => {
    dispatch(getProductById(pathname));
  }, [dispatch, pathname])

  return (
    <>
      {SpecProduct && <CurrentProduct product={SpecProduct} />}
    </>
  )
}

export default CurrentProductPage