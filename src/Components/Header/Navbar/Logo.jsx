import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
            <h2 className="text-2xl font-bold">MyPhone <span className=" text-red-600">Shop</span></h2>
            </Link>
        </div>
    );
};

export default Logo;