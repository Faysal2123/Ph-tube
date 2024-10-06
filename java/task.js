const displayVideos=(videos)=>{
    const videoContainer=document.getElementById('cont-videos')
    videos.forEach((video) =>{
        console.log(video);
        const card=document.createElement('div');
        card.classList="card card-compact bg-base-100  shadow-md";
        card.innerHTML=`
          <figure class="h-[200px]  relative">
       <img class="h-full w-full object-cover"
       src="${video.thumbnail}">
       
       ${
        video.others.posted_date?.length==0 ?""
           :`<span class="absolute right-2 bottom-2 p-1 text-sm text-white rounded bg-black">$(video.others.posted_date)</span>`
           
      }
         
       </figure>
       <div class="px-0 py-2 flex gap-11">
        <div><img class="w-10 h-10 rounded-full object-cover src="${video.authors[0].profile_picture}"/></div>
        <div>
          <h2><h3>${video.title}</h3></h2>
          <div class="flex gap-3 items-center">
             <P class="text-gray-400 ">${video.authors[0].profile_name}</P>

         ${
        video.authors[0].verified == true ? `<i id="blue" class="fa-solid fa-certificate"></i>`:''
         }
          </div>
        </div>
      
     
        </div>
        `
        videoContainer.append(card)
    })


}
getTimeString
<span class="absolute right-2 bottom-2 bg-black text-white text-sm rounded p-1">${video.others.posted_date}</span>

button.classList="btn";
button.innerText=item.category;