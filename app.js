

// let getNews =(search, page)=>{
  
 
//  fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&page_size=12&page=${page ? page : 1}` ,{
//       headers: {
//          'x-api-key': 'bgTWF2v727NxLaABOPP_bXGGEDpu0tD_zmDxBK-norc'
      
//         }
    
//  })
// .then(res=> res.json())
// .then(res=> {
//     let news =document.getElementById('news');
//     const articles = res.articles
//     for(var i = 0; i < articles.length;  i++){
//        const {media, title , summary  } =articles[i]; 
//        console.log(articles[i]);
//        news.innerHTML += `

//        <div class="card mt-2" style="width: 18rem;">
//   <img src="${media}" class="card-img-top news-img" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${title.slice(0, 20)}....</h5>
//     <p class="card-text">  ${summary.slice(0, 50)}...</p>
    
//   </div>
//   </div>
       
//        `
//     }
// })
// .catch(err=> console.log(err))
// }
// getNews();

// let page= 1;

// let newsSearch =()=>{
//     let search =document.getElementById('search');
//     let news =document.getElementById('news');
//     news.innerHTML ='';
    
// getNews(search.value)
// }

// let loadMore =()=>{
//     let search =document.getElementById('search');
//     page++;
//     getNews(search.value, page);
// }




// const apiKey = '9bd30512d49137576b6ad4f802d73af9'



//   fetch(`http://api.mediastack.com/v1/news&${apiKey}`)
//   .then(res => {
//     console.log('Response status:', res.status);
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Error:', err);
//   });
//`https://gnews.io/api/v4/search?q=example&apikey=8b6da0a2b2c91b9dcd5f4d74830e6a0b=













  let getNews =(search, page)=>{
  let loder =document.getElementById('loder');
  let content =document.getElementById('content');
  let myApis= ['e9dd8701e01f4cb68acf92c38e8ed2f9', '977e9d0f51ff4f5b9bbe4ac5b327f6b1']
  let randomNum = Math.floor(Math.random() * myApis.length);
  fetch(`https://api.worldnewsapi.com/search-news?api-key=
  ${myApis[randomNum]}&text=${search}&offset=${page ? page : 0}&number=12`)
  .then(res=> res.json())
  .then(res=> {
    console.log(res)
    loder.style.display ='none';
    content.style.display ='block';
       let news =document.getElementById('news');
       const articles = res.news
       for(var i = 0; i < articles.length;  i++){
          const {image, title , text , publish_date } =articles[i]; 
          console.log(articles[i]);
          news.innerHTML += `
   
          <div class="card mt-2" style="width: 18rem;">
     <img src="${image}" class="card-img-top news-img" alt="...">
     <div class="card-body">
       <h5 class="card-title">${title.slice(0, 20)}....</h5>
       <p class="card-text">  ${text.slice(0, 50)}...</p>
       <span class="badge bg-info text-dark">${new Date  (publish_date).toDateString()}</span><br/>
       <span class="badge bg-success">${moment(publish_date).fromNow()}</span>
     </div>
     </div>
          
          `
       }
   })
   .catch(err=> console.log(err))
   }
   getNews();
   
   let page= 1;
   
   let newsSearch =()=>{
       let search =document.getElementById('search');
       let news =document.getElementById('news');
       news.innerHTML ='';

       loder.style.display ='flex';
       content.style.display ='none';
       
   getNews(search.value)
   }
   
   let loadMore =()=>{
       let search =document.getElementById('search');
       page++
       getNews(search.value, page);
   }


   window.onscroll = function(ev) {
    if ((window.innerHeight + Math.round(window.scrollY))  >= document.body.offsetHeight) {
       loadMore();
    }
};