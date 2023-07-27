import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="py-3 px-5 mb-10 bg-gray-100">
        <ul className="flex gap-10">
          <li>
            <Link className="font-semibold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold" to="/form">
              Form
            </Link>
          </li>
          <li>
            <Link className="font-semibold" to="/multi-step">
              Multistep Form
            </Link>
          </li>
        </ul>
      </header>

      <div className="container mx-auto px-2">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
