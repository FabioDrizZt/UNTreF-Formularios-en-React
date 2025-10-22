import { useState, useEffect } from "react";
import axios from "axios";

const URL_BASE = "https://rickandmortyapi.com/api";

export default function usePersonaje() {
  const [personaje, setPersonaje] = useState({});
  const [id, setId] = useState(1);
  const [max, setMax] = useState(0);

  useEffect(() => {
    axios(URL_BASE + `/character`)
      .then((res) => setMax(res.data.info.count))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios(URL_BASE + `/character/${id}`)
      .then((res) => setPersonaje(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        siguiente();
      }
      if (e.key === "ArrowLeft") {
        anterior();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [siguiente, anterior]);

  function siguiente() {
    setId((id) => {
      return id === max ? 1 : id + 1;
    });
  }

  function anterior() {
    setId((id) => {
      return id === 1 ? max : id - 1;
    });
  }

  return [personaje, siguiente, anterior];
}
