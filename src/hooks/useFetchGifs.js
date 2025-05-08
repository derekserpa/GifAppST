import { useEffect, useState } from "react";
import { getGifs } from "../api/getGifs";

export const useFetchGifs = (category) => {

	// useState para guardar las imagenes 
	const [images, setImages] = useState([]);
	// useState para saber si se estan cargando las imagenes (true, mientras carga)
	const [IsLoading, setIsLoading] = useState(true)

	const getImages = async () => {
		// espera la respuesta de la api
		const NewImg = await getGifs(category);
		// guarda las imagenes en el estado
		setImages(NewImg)
		// ya termino de cargar
		setIsLoading(false)
	}

	useEffect(() => {
		// funcion para cargar las imagenes 
		getImages();
		// los [] sirve para que solo se ejecute una vez
	}, [])

	return {
		images: images,
		isLoading: IsLoading
	}
}
