import { useState } from "react";

export const useForm = (inicialForm = {}) => {

    const [formState, setFormState] = useState(inicialForm);
        
    // const {name,email, password} = formState

    const onBoorarCampos=()=>{
        setFormState(inicialForm)
    }
    
      // const onInputChange = (value)
      const onInputChange = ({ target }) => {
        // const { name, value } = target;
        setFormState({
          ...formState, //se copia el estado anterior
          [target.name]: target.value, //se actualiza el estado con el nuevo valor
        });
      };

      return{
        ...formState,
        formState,
        onInputChange,
        onBoorarCampos
    }

}
