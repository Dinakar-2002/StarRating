let container=document.getElementById("star-container");
let star=document.querySelectorAll(".star");
let content=document.getElementById("content")
let filled=0;

container.addEventListener("click",function(e){
    let currClicked=e.target.dataset.index;              // console.log("clicked",currClicked);
        //TO REMOVE COLOR
    for(let i=0;i<filled;i++){
        star[i].classList.remove("star-colored")
    }
    
        //TO ADD COLOR
    for(let i=0;i<currClicked;i++){
        star[i].classList.add("star-colored")
    }
    filled=currClicked;

    content.innerText=`Rating Count: ${currClicked}`;
});


//OPtional
container.addEventListener("mouseover",function(e){
    let currClicked=e.target.dataset.index;              // console.log("clicked",currClicked);
    
    for(let i=0;i<filled;i++){
        star[i].classList.remove("star-colored")
    }

    for(let i=0;i<currClicked;i++){
        star[i].classList.add("star-colored")
    }
    filled=currClicked;

    content.innerText=`Rating Count: ${currClicked}`;
})
