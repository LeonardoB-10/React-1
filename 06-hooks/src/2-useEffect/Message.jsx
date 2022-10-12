import { useEffect, useState } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("componente montado");
    
    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
