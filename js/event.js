const btnFunction = (id, image) => {
    const sideImageContainer = document.getElementById("side_image_container");

    const div = document.createElement('div');
    div.innerHTML = `
        <div>
            <img class="max-w-[124px] max-h-[124px] rounded-lg border p-4" src=${image}/>
        </div>    
    
    `

    sideImageContainer.appendChild(div)

}


