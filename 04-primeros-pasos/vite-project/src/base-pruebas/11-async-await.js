// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async () => {
  try {
    const apiKey = "0nJj0AsqT2IyfK0PuoIauCE0Sa8FjlSV";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
                
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No existe";
  }
};

module.exports = getImagen;
