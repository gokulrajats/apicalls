let proxy = 'https://cors-anywhere.herokuapp.com/';
const apiKey='AblT0IYBULlIxA9tGKkkxj4jUoK6cJiK&q';
let ids=1;
let limits=10;
let offset=0;
let count=0;
// let search = document.getElementById("searches").value;
 const searchGif = (search) =>{ 
     if(search!="trending"&&count==0){
        document.getElementById("gifs").innerHTML=""; 
     }
    //  document.getElementById("gifs").innerHTML="";      
    const Fetch = async url => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data; 

            } catch (error) {
                console.log(error);
            }
            
        }
        Fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=${limits}&offset=${offset}`)
        .then(
            response=>console.log(response.data.forEach(gif => {
                    console.log(response.data);
                    let imgdiv=document.createElement("div");
                    imgdiv.id=ids;
                    document.getElementById("gifs").appendChild(imgdiv);
                    let img = document.createElement('img'); 
                    img.src =  gif.images.downsized_medium.url;
                    document.getElementById(ids).appendChild(img); 
                
            }
            )
            )
            );
        }
// let yvalue=4430;
// window.onscroll = function() {myFunction()};

//         function myFunction() {
//           if (window.scrollY>yvalue) {
    
                

            
//         }
     
//         }
        window.onscroll = function(ev) {
            let total = document.documentElement.scrollHeight - window.innerHeight;
            let scrolly = window.scrollY;
            if(total==scrolly)
            {
                offset+=10;
                searchGif();
            }
            else{
                
            }
        };
        window.onload = () =>{
            search="trending";
            searchGif(search);
        }




