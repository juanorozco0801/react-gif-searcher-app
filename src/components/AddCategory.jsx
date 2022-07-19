import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target})=> {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        //console.log(target.value);
        //console.log(inputValue);
        event.preventDefault();

        if(inputValue.trim().length <=1 ) return;


        //setCategories(cat => [inputValue, ...cat])

        onNewCategory(inputValue.trim());
        setinputValue('');

    }


    return (
        // <form onSubmit={ (event) => onSubmit(event)}>
        //forma alterna de enviar el evento
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }    
                onChange ={ onInputChange }
            />
        </form>
  )
}
