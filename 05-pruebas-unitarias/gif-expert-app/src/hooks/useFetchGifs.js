import {useEffect, useState} from "react";
import { getGif } from "../helpers/getGif";

// Un hooks es una funcion que empieza con use
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

  const getImagenes = async () => {
    //Recibo un objeto con 3 paratributos
    const mewImagenes = await getGif(category);
    //Recibe 10 obejtos con 3 atributos cada uno
    setImages(mewImagenes);
    setLoading(false);
  };

  //Investigar el useEffect
  useEffect(() => {
    getImagenes();
  }, []); 

  return {
    images,
    isLoading, // Por defecto es true  porque esta cargando
  };
};

export default useFetchGifs;
