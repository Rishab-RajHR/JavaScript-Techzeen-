const accessKey = "LJJFgx2C-G8tv_HsjGR6TJ31MfbzKCnpS4m_GCBBj1s";

const searchForm = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page  = 1;

async function searchImages(){
     keyword = searchBox.ariaValueMax;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

     const response = await fetch(url);
     const data = await response.json();

     console.log(data);
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})