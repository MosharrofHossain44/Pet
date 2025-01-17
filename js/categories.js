// Load categories 
const loadAllCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    showCategories(data.categories)
}


//Show categories 
const showCategories = (data) => {
    // console.log(data)

    const category_container = document.getElementById('category_container');

    data.forEach((objectOfData) => {
        // console.log(objectOfData)
        const div = document.createElement('div');
        const {id, category, category_icon } = objectOfData;
        // console.log(category, category_icon)
        


        div.innerHTML = `
            <button id="category-${id}" onclick="displayCategories('${id}','${category}')" class="commonClass px-16 flex items-center gap-2 pt-2 pb-4  text-2xl font-bold border border-green-700 rounded-xl"><img src="${category_icon}" alt="Icon"> ${category} </button>
        
        `

        category_container.appendChild(div)

    })

}


const displayCategories = async (id,category)=>{
    // console.log(id)
    const getAllBtn = document.getElementsByClassName('commonClass');
    for(let getBtn of getAllBtn){
        // console.log(getBtn)
        getBtn.classList.remove('bg-[#0E7A811A]', 'rounded-full'); 
        getBtn.classList.add('rounded-xl')

    }


    // console.log(getAllBtn)
    const getBtn = document.getElementById(`category-${id}`);
    getBtn.classList.remove('rounded-xl')
    getBtn.classList.add('bg-[#0E7A811A]', 'rounded-full');
    // console.log(getBtn)




    // load data by categories
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`);
    const data = await res.json();
    displayAllPets(data.data)




}

loadAllCategories()