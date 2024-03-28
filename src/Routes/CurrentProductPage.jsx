import { useLocation } from "react-router-dom";
import CurrentProduct from "../Components/CurrentProduct";

const CurrentProductPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <CurrentProduct pathname={pathname} />
    </>
  )
}

export default CurrentProductPage