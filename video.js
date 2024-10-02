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
// ! demo 

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
// ! demo 

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video')
    videos.forEach(video => {

        const card = document.createElement('div')
        card.classList = "card card-compact "
        card.innerHTML =  `
        <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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