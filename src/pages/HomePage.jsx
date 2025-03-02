import { useEffect } from "react";
import axios from "../services/axios";

export default function HomePage() {
  function moviesFetch() {
    axios.get("/movies").then((res) => {
      console.log(res.data);
    });
  }

  useEffect(moviesFetch, []);

  return <h1 className="text-center">Home Page</h1>;
}
