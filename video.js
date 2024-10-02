// ! show catagories on HTML 
// * load Catagoris
// * display categories data 
// ! time function 
const time = (second) => {
    const years = Math.floor(second / 31536000);                 // Calculate whole years
    const days = Math.floor((second % 31536000) / 86400);        // Remaining days after extracting years
    const hours = Math.floor((second % 86400) / 3600);           // Remaining hours after extracting days
    const minutes = Math.floor((second % 3600) / 60);            // Remaining minutes after extracting hours
    const remainingSeconds = Math.floor(second % 60);            // Remaining seconds

    return `${years} year(s) ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${remainingSeconds} second(s)`
}
// ! function two

const showCategory= async(id)=>{

    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    const data = await res.json()
    displayVideos(data.category)

}


const loadData = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        const data = await res.json()
        displayData(data.categories)
    }
    catch (error) {
        console.log("something wrong", error)
    }

}

// ! video load /................................................................................../.

const videoLoad = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        const data = await res.json()
        displayVideos(data.videos)
    }
    catch (error) {
        console.log("something wrong", error)
    }

}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video')
    videoContainer.innerHTML = ''
    videos.forEach(video => {

        const card = document.createElement('div')
        card.classList = "card card-compact "
        card.innerHTML =  `
        <figure class="h-[200px] relative">
    <img
      src="${video.thumbnail}"
      class="h-full object-cover"
      alt="Shoes" />

   ${video.others.posted_date.length == 0 ? "" : `<span class="absolute text-xs right-8 bg-black p-1 rounded text-white bottom-2 ">${time(video.others.posted_date)}</span>`}




  </figure>


  <div class="px-0 py-2 flex gap-2">


  <div>
      <img class='w-10 h-10 rounded-full object-cover' src="${video.authors[0].profile_picture}">
  </div>

  <div>


  <h2 class='font-bold'>${video.title}</h2>
<div class="flex items-center gap-2">
  <p class='text-gray-500'>${video.authors[0].profile_name}</p>
 
  ${video.authors[0].verified === true ? " <img class='h-5 ' src='https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png'>" :"" }

</div>

  <p>${video.others.views} views</p>

  
  </div>

  

  </div>
  `
  videoContainer.append(card)

        console.log(video)



    })

}



// ! video load /................................................................................../.


const displayData = (data) => {
    const categoryContainer = document.getElementById('category')


    data.forEach(item => {
        // ! create button 

        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <button onclick="showCategory(${item.category_id})" class="btn">${item.category}</button>
        
        `
        // ! add btn to category container 
        categoryContainer.append(btnDiv)







    })







}









loadData()
videoLoad()