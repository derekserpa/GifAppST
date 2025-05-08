export const getGifs = async (category) => {
	// peticion a la api                                                               category = messi    limite de imagenes 
	const url = `https://api.giphy.com/v1/gifs/search?api_key=GtlEgp369mAkk6ujPQ91b1tkBCNGBWgU&q=${category}&limit=10`

	const resp = await fetch(url);

	const { data } = await resp.json();
	// obtener solo lo que me interesa del json
	const gifs = data.map((img) => ({
		// el id de la imagen
		id: img.id,
		// el titulo de la imagen
		title: img.title,
		// la imagen - gif 
		img: img.images.downsized_medium.url
	}))
	return gifs;
}
