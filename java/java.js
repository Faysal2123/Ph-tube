//create loadCategories
const loadCategories=() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data =>displayCategories(data.categories))
    .catch((error) => console.log(error));
}
const displayCategories=(categories) =>{
    console.log(categories)
    const categoryContainer=document.getElementById('categories')
    categories.forEach((item)=>{
    console.log(item)
    const buttonContainer=document.createElement('div')
    buttonContainer.innerHTML=`
    <button onclick="loadCategoryVideo(${item.category_id})" class="btn">${item.category}</button>
    `
   
    categoryContainer.append(buttonContainer);

   });
};
const loadCategoryVideo=(id)=>{
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then((res) => res.json())
  .then((data) => displayVideos(data.category))
}
const loadVideos=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log('error'))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('cont-videos');
    videoContainer.innerHTML = "";  // Clear the container before rendering new content

    if(videos.length==0){
      videoContainer.classList.remove("grid");
      videoContainer.innerHTML=`
      <div class="min-h-[500px] flex flex-col gap-5 justify-center items-center">
      <img src="images/icon.png">
      <h2 class="text-center text-xl font-bold">No Content Here In This Category</h2>
      </div>
      `
      return;
     
    }
    else{
      videoContainer.classList.add("grid")
    }
   
  
    videos.forEach((video) => {
      console.log(video);
      const card = document.createElement('div');
      card.classList = "card card-compact bg-base-100 shadow-md";
  
      // Updated template string with fixed syntax and checks
      card.innerHTML = `
        <figure class="h-[200px] relative">
          <img class="h-full w-full object-cover" src="${video.thumbnail}" alt="${video.title}">
            
           ${
        video.others.posted_date?.length==0 ?""
           :`<span class="absolute right-2 bottom-2 p-1 text-sm text-white rounded bg-black">${video.others.posted_date}</span>`
           
      }
        </figure>
        <div class="px-0 py-2 flex gap-4 items-start">
          <div>
            <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" alt="${video.authors[0].profile_name}">
          </div>
          <div>
            <h2 class="font-semibold text-lg">${video.title}</h2>
            <div class="flex gap-3 items-center">
              <p class="text-gray-400">${video.authors[0].profile_name}</p>
              ${
                video.authors[0].verified === true
                  ? `<i id="blue" class="fa-solid fa-certificate text-blue-500"></i>`
                  : ""
              }
            </div>
          </div>
        </div>
      `;
      
      videoContainer.append(card);
    });
  };
  


loadCategories()
loadVideos()

