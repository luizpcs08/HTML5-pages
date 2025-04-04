let images = [];

let flipped = [];

let play = true;


//returns a list of strings enumerated from 1 to n in a number.jpg format
function get_images(n){
    for(let i = 1; i <= n; i++){

        images.push(i + ".png");
        images.push(i + ".png");

    }
}

function sort_images(images){
    let n, aux, new_i;

    for(let i = 0; i < images.length; i++){

        aux = images[i];
        new_i = Math.floor( Math.random() * images.length );
        images[i] = images[new_i];
        images[new_i] = aux;
        
    }
}

/*inserts one image for each element inside images in game-container.
  these images will receive a interrogation mark image and a class,
  the class will be the name of the element in images[i]*/
function insert_images(images){
    for(let i = 0; i < images.length; i++){

        let image = document.createElement("img");
        image.setAttribute("data-image_name", images[i]);
        image.setAttribute("src", `images/interrogation-mark.png`);
        image.addEventListener('click', function(){
            flip_card(this);
        })

        //image.setAttribute("src", `images/`+images[i]);
        document.querySelector(".game-container").appendChild(image);
    }
}

//unflip the last two cards in flipped.
function unflip(flipped){
    //unflip
    flipped[flipped.length - 1].setAttribute("src", `images/interrogation-mark.png`);
    flipped[flipped.length - 2].setAttribute("src", `images/interrogation-mark.png`);

    //takes off box shadow
    flipped[flipped.length - 1].style.boxShadow = "0 0 0px rgb(255, 0, 0)";
    flipped[flipped.length - 2].style.boxShadow = "0 0 0px rgb(255, 0, 0)";

    //pops flipped
    flipped.pop();
    flipped.pop();

    play = true;
}


//flips card and determine next actions
function flip_card(image){
    let src = image.getAttribute('src');

    //check if card is already fliped and if play is true
    if(src != 'images/interrogation-mark.png' || play === false){
        return null;
    }

    //changes image src
    let path = image.getAttribute('data-image_name');
    console.log(path);
    image.setAttribute("src", `images/`+path);

    flipped.push(image);

    //if 2 cards were flipped
    if( (flipped.length % 2) == 0){

        //if they are different
        if(flipped[flipped.length - 1].getAttribute("data-image_name") != flipped[flipped.length - 2].getAttribute("data-image_name")){
            
            //put red box shadow
            flipped[flipped.length - 1].style.boxShadow = "0 0 15px rgb(255, 0, 0)";
            flipped[flipped.length - 2].style.boxShadow = "0 0 15px rgb(255, 0, 0)";

            play = false;

            setTimeout(unflip, 1400, flipped);
            
        }
    }
}


function main(){

    console.log("images");
    get_images(8);
    sort_images(images);
    insert_images(images);

}