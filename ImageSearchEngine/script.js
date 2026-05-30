const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show-more-btn");

LJJFgx2C-G8tv_HsjGR6TJ31MfbzKCnpS4m_GCBBj1s

let keyword = "";
let page  = 1;

async function searchImages(){
     keyword = searchBox.ariaValueMax;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}`;
}