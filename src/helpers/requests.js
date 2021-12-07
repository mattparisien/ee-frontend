import axios from "axios";
import useAxios from "./hooks/useAxios";

const getfeatureImages = () => {
  const {error, data, loading} = useAxios('/api/posts/1');
}

export { getfeatureImages }