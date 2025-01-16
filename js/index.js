// Lod all pets
const loadAllPets = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
  const data = await res.json();
  displayAllPets(data.pets)
}


//Load pet details
const loadPetDetails = async (petId) => {
  // console.log(petId)
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
  const data = await res.json();
  displayPetDetails(data.petData)
}




//display all pets
const displayAllPets = (petsArray) => {
  // console.log(petsArray)





  petsArray.forEach((petData) => {
    // console.log(petData)

    const { date_of_birth, gender, image, pet_name, price, breed, petId } = petData;


    const cardContainer = document.getElementById('card_container');

    const card = document.createElement('div');
    card.innerHTML = `
        
        <div class="card  w-72   py-5 border">
      <figure class="px-5 w-[272px] h-[160px]">
        <img
          src=${image}
          class="rounded-xl object-cover" />
      </figure>
      <div class="px-5 ">
        <h2 class="font-bold text-2xl">${pet_name}</h2>
        <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=24&id=115221&format=png" alt=""> Breed: ${breed ? breed : "N/A"}</p>
        <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=80&id=KSfj5cWqaKxg&format=png" alt=""> Birth: ${date_of_birth ? date_of_birth : "N/A"}</p>
        <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=32&id=16271&format=png" alt=""> Gender: ${gender ? gender : "N/A"}</p>
        <p class="font-medium pb-2 text-gray-500"><img class="inline w-[16px] h-[16px]" src="https://img.icons8.com/?size=24&id=85801&format=png" alt=""> Price: ${price ? price : "N/A"}</p>
        
        <hr>
      
        <div class="card-actions pt-5 ">
            <button id="like-${petId}" onclick="btnFunction('${petId}', '${image}')" class="btn bg-white"><img class="w-[18px]" src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png" alt=""></button>
          <button id="adoptBtn" class="btn bg-white border text-[#0E7A81] font-medium text-[18px]">Adopt</button>
          <button onclick="loadPetDetails(${petId})" class="btn  bg-white border text-[#0E7A81] font-medium text-[18px]">Details</button>
        </div>
      </div>
    </div>
        
        `


    cardContainer.appendChild(card)
  })



}

//Display pet details
const displayPetDetails = (data) => {
  // console.log(data)
  const { breed, date_of_birth, gender, image, pet_details, pet_name, price, vaccinated_status } = data;

  const Birth = date_of_birth ? date_of_birth.slice(0, 4) : "N/A";


  const getModalContainer = document.getElementById('modal_content');

  getModalContainer.innerHTML = `

    <figure class=" max-w-[636px] max-h-[320px]">
        <img
          src=${image}
          class="rounded-xl w-full h-full object-cover" />
      </figure>
   <h2 class="font-bold pt-2 text-2xl">${pet_name}</h2>
  
   <div class="flex justify-between py-2 mb-4">
      <div>
    <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=24&id=115221&format=png" alt=""> Breed: ${breed ? breed : "N/A"}</p>

  <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=32&id=16271&format=png" alt=""> Gender: ${gender ? gender : "N/A"}</p>
  <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=32&id=16271&format=png" alt=""> Vaccinated status: ${vaccinated_status ? vaccinated_status : "N/A"}</p>
  </div>
  <div>
    <p class="font-medium text-gray-500"><img class="inline w-[16px]" src="https://img.icons8.com/?size=80&id=KSfj5cWqaKxg&format=png" alt=""> Birth: ${Birth}</p>
   <p class="font-medium pb-2 text-gray-500"><img class="inline w-[16px] h-[16px]" src="https://img.icons8.com/?size=24&id=85801&format=png" alt=""> Price: ${price ? price : "N/A"}</p>
  </div>
   </div>

  <hr>

   <div class="my-4">
      <h2 class="font-bold">Details Information</h2>
      <p class="text-justify">${pet_details}</p>
      


   </div>
  
  `




  // Show Modal 
  document.getElementById('my_modal_5').showModal()
}







loadAllPets()