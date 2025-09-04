document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
	const rapperName = document.querySelector("input").value;
	const bodyElement = document.querySelector("#image");

	try {
		const response = await fetch(
			`https://my-first-crud.onrender.com/api/${rapperName}`
		);
		const data = await response.json();

		console.log(data);
		bodyElement.style.backgroundImage = `url('${data.imageUrl}')`;
		bodyElement.style.backgroundSize = "contain";
		bodyElement.style.backgroundRepeat = "no-repeat";
		bodyElement.style.backgroundPosition = "0 center";
		// document.querySelector("img").src = data.imageUrl;
		document.querySelector("h2").innerHTML = `<p>
            ${data.birthName} popularly known as ${rapperName} originates from ${data.origin}, born on the ${data.birthdate} in ${data.birthLocation}
        </p>
      <p> 
         ${rapperName} is a ${data.occupation} and is into ${data.genre}  active from ${data.yearsActive} with ${data.labels} record labels.
       </p> <p>${rapperName} has ${data.children} kids</p>`;
	} catch (error) {
		console.log(error);
	}
}
