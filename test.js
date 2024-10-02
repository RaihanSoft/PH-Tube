// ! Load all the Catagory Button From API and Show them in a centered position
const loadCategory= async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
    displayCategory(data.categories)
}
displayCategory=(datas)=>{
    const navContainer = document.getElementById('nav')
    datas.forEach(data => {
        const btn = document.createElement('button')
        btn.classList = "btn"
        btn.innerHTML = data.category
        navContainer.append(btn)
    })
}

const demo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

// ! Load all the videos from API 
const loadVideo = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await res.json()
    displayVideo(data.videos)
}
displayVideo=(datas)=>{
    const videoContainer = document.getElementById('videoContainer')
    datas.forEach(data=>{
        const card = document.createElement('div')
        card.classList = "card card-compact bg-base-100"
        card.innerHTML = ` <figure class="h-[200px] w-[400px] relative">
    <img
    class="h-full w-full object-cover "
      src="${data.thumbnail}"
      alt="Shoes" />
      <span class=" absolute bg-black text-white p-2 bottom-2 right-2 " >${data.others.posted_date}</span>
  </figure>

  <div class="py-2 flex gap-2">

  <div>
  <img class="h-10 w-10 rounded-full" src="${data.authors[0].profile_picture}">
  </div>

  <div>

  <h2 class="font-bold" >${data.title}</h2>


 <div class="flex  items-center gap-2"> 
 <p class='text-gray-500' >${data.authors[0].profile_name}</p>

 ${data.authors[0].verified === true ? ' <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">' : "" }
 

 </div>

  <p>${data.others.views} views</p>

  </div>

    
  </div>`

  videoContainer.append(card)
        console.log(data)



    })
}








// ! function calls
loadCategory()
loadVideo()