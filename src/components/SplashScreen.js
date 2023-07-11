import { Outlet, Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <>
        <Link to="/vendorslist">Home</Link>
        <Outlet />
    </>
  )
};

export default SplashScreen;