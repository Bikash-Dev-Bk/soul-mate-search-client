import { Link } from "react-router-dom";
import errorimage from '../../assets/error.jpg'


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-5 md:p-4 lg:p-2">
            <img src={errorimage} alt="" className="md:w-3/4 lg:w-1/2 mb-5" />
            <Link className="bg-[#D70F64] text-white py-3 px-5 rounded-md" to="/">Back home</Link>
        </div>
    );
};

export default ErrorPage;