import { useState } from "react"
import { GifAppST } from "../GifAppST";

export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState("")

	// target es el input
	const OnInputChange = ({ target }) => {
		// target.value es el texto que hay en el input
		setInputValue(target.value);
	}

	const onSubmit = (event) => {
		// evitar que se recargue la página al enviar el formulario
		event.preventDefault();
		// condicional para que el input tenga como minimo una letra y este sin espacios 
		if (inputValue.trim().length <= 1) return
		// Llama a la funcion pasandole el input sin espacios
		onNewCategory(inputValue.trim());
		// vaciar el value una vez que se haya añadido
		setInputValue("");
	}
	return (
		//            func OnSubmit
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Busca tu Gif"
				id=""
				value={inputValue}
				onChange={OnInputChange}
			/>
		</form>
	)
}
