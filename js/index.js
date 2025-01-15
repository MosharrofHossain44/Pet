// Lod all pets
const loadAllPets = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    displayAllPets(data.pets)
}




//display all pets
const displayAllPets = (petsArray) => {
    console.log(petsArray)


   


    petsArray.forEach((petData)=>{
        console.log(petData)

        const { date_of_birth, gender, image, pet_name, price, breed} = petData;


        const cardContainer = document.getElementById('card_container');

        const card = document.createElement('div');
        card.innerHTML = `
        
        <div class="card  w-72 shadow-xl">
      <figure class="px-5 pt-10">
        <img
          src=${image}
          class="rounded-xl" />
      </figure>
      <div class="pl-5 ">
        <h2 class="font-bold text-2xl">${pet_name}</h2>
        <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=24&id=115221&format=png" alt=""> Breed: ${breed? breed:"N/A"}</p>
        <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=80&id=KSfj5cWqaKxg&format=png" alt=""> Birth: ${date_of_birth? date_of_birth:"N/A"}</p>
        <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=32&id=16271&format=png" alt=""> Gender: ${gender? gender:"N/A"}</p>
        <p class="font-medium pb-2 text-gray-500"><img class="inline w-[16px] h-[16px]" src="https://img.icons8.com/?size=24&id=85801&format=png" alt=""> Price: ${price? price:"N/A"}</p>
        
        <hr>
      
        <div class="card-actions pt-2 pb-10">
            <button class="btn"><img src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png" alt=""></button>
          <button class="btn ">Adopt</button>
          <button class="btn ">Details</button>
        </div>
      </div>
    </div>
        
        `

    
        cardContainer.appendChild(card)
    })
   

   
}





loadAllPets()