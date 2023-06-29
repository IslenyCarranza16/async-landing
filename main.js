


const contenido = document.getElementById('content');

const url = 'https://spotify23.p.rapidapi.com/playlist/?id=67nDEe8cM1oNXf61wrYjat';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f41b91d14mshf1f58d90f2d7ff7p1a4f19jsn0d48ea12ba2e',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

 async function fetchData (urlt, optionst){
 
        const response = await fetch(urlt, optionst);
        const result = await response.json();
        return result;
  
}

 // este tipo de funcion permite llamarse a si mismo 
( async()=>{  
    try{ // es lo que va real 
        const playlist = await fetchData(url,options) // aca se llama la funciòn de arriba que tiene los datos y en esta parte se hace todo lo que se espera con la información
       let listaImagen = `${
        playlist.images.map(image=>
            `
        <div class = "listaSpotify">
         <a title="lista" href="https://open.spotify.com/playlist/67nDEe8cM1oNXf61wrYjat"><img src="${image.url}" alt="lista" /></a>
 
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
           "The author is: ${playlist.owner.display_name}"
        </h3>
    </div>
         `           
    )
       }`

       contenido.innerHTML=listaImagen; // para agregar aquí el contenido en el htlm

    } catch{ error => console.log(error);

    };

})()

