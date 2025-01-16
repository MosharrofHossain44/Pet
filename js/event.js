const btnFunction = (id,image) => {
    const sideImageContainer = document.getElementById("side_image_container");

    const div = document.createElement('div');
    div.innerHTML = `
    <img class="max-w-[124px] max-h-[124px]" src=${image}/>
    
    
    `

    sideImageContainer.appendChild(div)
    
}


