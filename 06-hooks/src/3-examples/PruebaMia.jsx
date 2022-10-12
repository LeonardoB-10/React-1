import React, { useEffect, useState } from "react";

export const MultibpleCustomHooks2 = () => {
  const [counter, incrementar] = useState(1);

  const [input, setInput] = useState("");

  const [num, setNum] = useState({
    quote_id: 0,
    quote: "",
  });

  useEffect(() => {
    apiInfo().then((data) => {
      setNum({ quote_id: data.quote_id, quote: data.quote });
    });
  }, [input]);

  const apiInfo = async () => {
    const data = await fetch(
      `https://www.breakingbadapi.com/api/quotes/${input}`
    );
    const data2 = await data.json();
    const { quote_id, quote } = data2[0];
    return { quote_id: quote_id, quote: quote };
  };

  const sumarNumero = () => {
    incrementar(counter + 1);
  };

  const recuperarInput = ({ target }) => {
    setInput(target.value);
  };

  return (
    <>
      <h2>Informacion del archivo</h2>
      <p>
        {num.quote_id} - {num.quote}
      </p>
      <button onClick={sumarNumero}>Cambiar informacion</button>
      <br />
      <br />
      <button onClick={() => incrementar(counter - 1)}>Descrementar</button>
      <br />
      <br />
      <input type="nuber" onChange={recuperarInput} />
    </>
  );
};
