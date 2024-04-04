import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/blogs"} className="flex flex-col justify-center">
        Medium
      </Link>

      <div>
        <Link to={"/Publish"}>
          <button
            type="button"
            className="mr-4 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add New Blog +
          </button>
        </Link>
        <Avatar name="raju" size={"big"} />
      </div>
    </div>
  );
};
