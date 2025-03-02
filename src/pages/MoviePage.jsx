import { useEffect } from "react";
import axios from "../services/axios";
import { useParams, useNavigate } from "react-router";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  function movieFetch() {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/PageNotFound");
        }
      });
  }

  useEffect(movieFetch, []);

  return <h1>Movie Page</h1>;
}
