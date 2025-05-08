import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifAppST = () => {

	// hook useState    
	const [categories, setCategories] = useState([])

	const onAddCategory = (NewCategory) => {
		// no añadir categoria si ya existen 
		if (categories.includes(NewCategory)) {
			return
		}
		// añadir una nueva categoria sin modificar la original
		setCategories([NewCategory, ...categories])
	}

	return (
		<>
			{/* Aqui va el titulo */}
			<h1>GifAppST</h1>
			{/* Input */}
			<AddCategory
				onNewCategory={(value) => onAddCategory(value)}
			/> <br />
			{/* Listado de Gifs */}
			<ol>
				{categories.map(category => {
					// retornar mi category
					return (<GifGrid
						key={category}
						category={category}
					/>)
				})
				}
			</ol>
		</>
	)
}
