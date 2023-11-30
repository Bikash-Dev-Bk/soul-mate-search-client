import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://soul-mate-search-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
