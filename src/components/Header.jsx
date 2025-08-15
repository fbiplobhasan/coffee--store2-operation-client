import { Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="flex">
      <div className="flex gap-2">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/signin" className="btn">
          Login
        </Link>
        <Link to="/users" className="btn">
          Users
        </Link>
      </div>
    </div>
  );
};

export default Header;
