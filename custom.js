/* Jag använde mig utav devtools i chrome för att felsöka felen har uppstått under tiden
   jag har arbetat med inlämningsuppgiften. När jag fick något som inte fungerade som t.ex.
   att jag inte kunde få fram några artiklar i dropdown listan så kunde jag se i consolen i devtools
   att t.ex. value is not defined som var ett stavfel i detta fallet.
   
   Jag valde att lägga loopen som gör artiklarna i en egen funktion med en inparameter "value" så att
   jag kan använda funktionen flera gånger. Detta gjorde det smidigt för mig att kunna använda både en
   dropdown med färdiga värden och en input där man kan välja hur många artiklar man vill visa. */

function selectArticles() {
    let selectValue = document.getElementById("article-count").value;
    loop(selectValue);
}

function inputArticles() {
    let inputValue = document.getElementById("article-input-count").value;
    loop(inputValue);
}
/* Här i loopen så kollar den värdet från selectorn och inputen i html och använder värderna för att
   veta hur många gånger loopen ska köras.  */
function loop(value) {
    removeAllSections(); /* Återställer alla artiklar så nya värden kan sättas så att det inte blir dubbletter. */
    for (let i = 1; i <= value; i++) {
        let parent = document.querySelector("main");

        let child = document.createElement("section");
        let title = document.createElement("h4");
        let content = document.createElement("p");

        title.innerText = "Title " + i;
        content.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
    
        makeEditable(title); /* Gör titlen i artiklen redigerbar. */
        makeEditable(content); /* Gör innehållet i artiklen redigerbar. */

        child.appendChild(title); 
        child.appendChild(content);
        parent.appendChild(child);
    }
}

/* Funktion som gör så att man kan redigera innehållet i artiklarna. */
function makeEditable(elem){
    elem.onclick = function() {
        elem.contentEditable = true;
        elem.focus();
    };
    elem.onblur = function() {
        elem.contentEditable = false;
    };
}

/* Tar bort all innehåll i elementet section. */
function removeAllSections(){
    let test_sections = document.querySelectorAll("section");
    for (let i = 0; i < test_sections.length; i++){ /* Kollar hur många element som section har och tar bort elementerna. */
        test_sections[i].remove();
    }
}

/* togglar mellan att visa dropdown eller input.
   Detta är ett event som ligger i HTML koden där det är en onclick event som togglar mellan en klass. */
function showInput() {
    let valueInput = document.getElementById("article-input-count");
    let selectorInput = document.getElementById("article-count");
    let changeText = document.getElementById("show-input-btn");

    valueInput.classList.toggle("show-input");
    selectorInput.classList.toggle("hide-input");
    if (selectorInput.classList.contains('hide-input')) { /* Kollar om input har en viss klass och ändrar texten på knappen. */
        changeText.innerText = "Visa dropdown";
    } else {
        changeText.innerText = "Visa input";
    }
}