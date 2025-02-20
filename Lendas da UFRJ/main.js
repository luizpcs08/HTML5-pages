let images = [];

//cont number of cards that were fliped
let cont = 0;

//returns a list of strings enumerated from 1 to n in a number.jpg format
function get_images(n){
    for(let i = 1; i <= n; i++){

        images.push(i + ".jpg");
        images.push(i + ".jpg");

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
        image.setAttribute("class", images[i]);
        image.setAttribute("src", `images/interrogation_mark.png`);
        document.querySelector(".game-container").appendChild(image);
    }
}

function main(){

    console.log("images");
    get_images(8);
    sort_images(images);
    insert_images(images);

}