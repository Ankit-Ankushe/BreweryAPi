let api_key = "3c861c38"
async function main(){
    try{
         let data = await Searchmovies();
    }
    catch(err){
        console.log(err)
    }

}
async function Searchmovies(){
    try{
        let moive = document.getElementById("query").value;
        let  res = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${movie}`)
        let data = await res.json();
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
}
let timer;
function debouncing(func , delay){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(function(){
        func();
    },delay);
}