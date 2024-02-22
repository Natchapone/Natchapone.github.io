const images = document.querySelectorAll(".playerThrow img");
const pOption = document.querySelectorAll("[id= 'pPick']");
const cOption = document.getElementById("cPick");
var interval;
var timer = 0;
const throws = ["images/rock.PNG", "images/paper.PNG", "images/scissors.PNG"]; //array of paths to the images
let pThrowSrc;

// Highligh the player's throw when clicked
images.forEach(function (image) {
    image.addEventListener("click", function () {
        image.parentElement.parentElement.parentElement.id = "highlighted";
        pThrowSrc = image.src;
    });
});

for (var i = 0; i < pOption.length; i++) {
    pOption[i].addEventListener("click", shuffle);
}

//function to shuffle computer throws and select a random throw and return result
function shuffle() {
    timer = 0;
    interval = setInterval(function () {
        //select an image from the array at random
        cOption.src = throws[Math.floor(Math.random() * throws.length)];

        //Increment timer by helf a second
        timer += 500;

        if (timer >= 3000) {
            clearInterval(interval); //clear interval after 3 seconds
            //select an image at random
            cOption.src = throws[Math.floor(Math.random() * throws.length)];

            const cThrowSrc = cOption.src;
            const rockSrc = "http://127.0.0.1:3000/csc300x-hw4/images/rock.PNG";
            const paperSrc = "http://127.0.0.1:3000/csc300x-hw4/images/paper.PNG";
            const scissorsSrc = "http://127.0.0.1:3000/csc300x-hw4/images/scissors.PNG";
            const winTxt = document.createTextNode("You Win!");
            const loseTxt = document.createTextNode("You Lose!");
            const drawTxt = document.createTextNode("It's a Draw!");


            //decide result
            if (cThrowSrc === pThrowSrc) {
                document.getElementById("resultTxt").appendChild(drawTxt);
            }
            else if (cThrowSrc === rockSrc && pThrowSrc === paperSrc) {
                document.getElementById("resultTxt").appendChild(winTxt)
            }
            else if (cThrowSrc === rockSrc && pThrowSrc === scissorsSrc) {
                document.getElementById("resultTxt").appendChild(loseTxt)
            }
            else if (cThrowSrc === paperSrc && pThrowSrc === rockSrc) {
                document.getElementById("resultTxt").appendChild(loseTxt)
            }
            else if (cThrowSrc === paperSrc && pThrowSrc === scissorsSrc) {
                document.getElementById("resultTxt").appendChild(winTxt)
            }
            else if (cThrowSrc === scissorsSrc && pThrowSrc === rockSrc) {
                document.getElementById("resultTxt").appendChild(winTxt)
            }
            else if (cThrowSrc === scissorsSrc && pThrowSrc === paperSrc) {
                document.getElementById("resultTxt").appendChild(loseTxt)
            }
        }

    }, 500);
}




