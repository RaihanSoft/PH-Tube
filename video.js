// ! show catagories on HTML 
// * load Catagoris
// * display categories data 

const loadData= async ()=>{
try{
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json()
    displayData(data.categories)
}
catch(error){
    console.log("something wrong", error)
}

}

const displayData=(data)=>{
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