// ! Load all the Catagory Button From API and Show them in a centered position

// !onclick 
const category = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    const data = await res.json()
    displayVideo(data.category)
    RemoveActive()

    const activeBtn = document.getElementById(`btn-${id}`)
    activeBtn.classList.add('active')



}

const RemoveActive = () => {
    const categoryBtn = document.getElementsByClassName('category-btn')
    for (let btn of categoryBtn) {
        btn.classList.remove('active')
    }

}



const showDetails = async (video) => {
    console.log(video)
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${video}`)
    const data = await res.json()
    detailsData(data.video)
}
const detailsData=(data)=>{
    console.log(data)
    document.getElementById('modalId').click()
    const modalContent = document.getElementById('modalContent')
    modalContent.innerHTML= ` 

    <img src="${data.thumbnail}">
    <p>${data.description}</p>
    
    
    `

}


// !onclick end

const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
    displayCategory(data.categories)
}
displayCategory = (datas) => {
    const navContainer = document.getElementById('nav')
    datas.forEach(data => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `

        <button id="btn-${data.category_id}" class='btn category-btn' onclick=(category(${data.category_id})) >
        ${data.category}
        
        </button>
        
        
        
        `
        navContainer.append(btnDiv)
    })
}



// ! time function 
const time = (second) => {
    const years = Math.floor(second / 31536000);                 // Calculate whole years
    const days = Math.floor((second % 31536000) / 86400);        // Remaining days after extracting years
    const hours = Math.floor((second % 86400) / 3600);           // Remaining hours after extracting days
    const minutes = Math.floor((second % 3600) / 60);            // Remaining minutes after extracting hours
    const remainingSeconds = Math.floor(second % 60);            // Remaining seconds

    return `${years} year(s) ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${remainingSeconds} second(s)`
}
// ! time function end


// ! Load all the videos from API 
const loadVideo = async (searchText = "") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    const data = await res.json()
    displayVideo(data.videos)
}
displayVideo = (datas) => {
    const videoContainer = document.getElementById('videoContainer')
    videoContainer.innerHTML = ""

    if (datas.length === 0) {
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center ">
        <img src="assets/icon.png">
        <h2 class="font-bold text-3xl mt-4">NO Content Available</h2>
        
        </div>
        
        `
    }
    else {
        videoContainer.classList.add('grid')

    }


    datas.forEach(data => {
        const card = document.createElement('div')
        card.classList = "card card-compact bg-base-100"
        card.innerHTML = ` <figure class="h-[200px] w-[400px] relative">
    <img
    class="h-full w-full object-cover "
      src="${data.thumbnail}"
      alt="Shoes" />
      <span class=" absolute text-xs bg-black text-white p-2 bottom-2 right-2 " >${time(data.others.posted_date)}</span>
  </figure>

  <div class="py-2 flex gap-2">

  <div>
  <img class="h-10 w-10 rounded-full" src="${data.authors[0].profile_picture}">
  </div>

  <div>

  <h2 class="font-bold" >${data.title}</h2>


 <div class="flex  items-center gap-2"> 
 <p class='text-gray-500' >${data.authors[0].profile_name}</p>

 ${data.authors[0].verified === true ? ' <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">' : ""}
 

 </div>

   <p> <button onclick="showDetails('${data.video_id}')" class="btn btn-sm btn-error text-white">Details</button> </p>

  </div>

    
  </div>`

        videoContainer.append(card)
        console.log(data)



    })
}

// ! searchInput 
document.getElementById('searchInput').addEventListener("keyup", (event)=>{
    loadVideo(event.target.value)
})



// ! function calls
loadCategory()
loadVideo()