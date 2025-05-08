import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

	// custom hook 
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h2>{category}</h2>
			{
				isLoading ? <h3>Cargando...</h3> : null
			}
			{/* mostrar img con una lista usando el map */}
			<div className="card-grid">
				{ // hacemos la deses: img.id y img.title
					images.map((image) => (
						<GifItem
							key={image.id}
							{...image}
						/>
					))
				}
			</div>
		</>
	)
}
