import { useState } from "react";
import { AddCategories } from "./componets/AddCategories";
import { GifGrid } from "./componets/GifGrid";

export const GifExpertApp = () => {

  const [categories,setcategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        if(categories.includes(newCategory)) return;//si la categoria ya existe no la agrega
        setcategories([newCategory,...categories]);//agrega la nueva categoria al principio del arreglo
        console.log(categories);
    }
     
    //se le pasa la funcion onAddCategory como prop al componente AddCategories
    return (
    <>
      <AddCategories onNewCategory = {event => onAddCategory(event)}/>
        {/* Entra la categoria */}
        {categories.map((category) => (
        <GifGrid
            key={category} 
            category={category}
            />
            ))}
    </>
  );
};
