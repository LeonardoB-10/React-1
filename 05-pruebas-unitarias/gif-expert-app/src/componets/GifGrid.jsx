// import { getGif } from "../helpers/getGif";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GigGridItem";

export const GifGrid = ({ category }) => {
  //se desestructura el objeto que retorna el custom hook useFetchGifs y se obtiene la propiedad images y isLoading
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h4>{category}</h4>
      {isLoading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((images) => (
          <GifGridItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
