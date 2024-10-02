// ! show catagories on HTML 
// * load Catagoris
// * display categories data 

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
// ! card demo  start 

const demo = {
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}
// ! demo end

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video')
    videos.forEach(video => {

        const card = document.createElement('div')
        card.classList = "card card-compact "
        card.innerHTML =  `
        <figure class="h-[200px]">
    <img
      src="${video.thumbnail}"
      class="h-full object-cover"
      alt="Shoes" />
  </figure>


  <div class="px-0 py-2 flex gap-2">


  <div>
      <img class='w-10 h-10 rounded-full object-cover' src="${video.authors[0].profile_picture}">
  </div>

  <div>


  <h2 class='font-bold'>${video.title}</h2>
<div class="flex items-center gap-2">
  <p class='text-gray-500'>${video.authors[0].profile_name}</p>
  <img class='h-5 ' src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"> 

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

        const btn = document.createElement('button')
        btn.classList = 'btn'
        btn.innerText = item.category

        // ! add btn to category container 
        categoryContainer.append(btn)







    })







}









loadData()
videoLoad()