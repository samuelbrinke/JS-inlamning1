function selectArticles() {
    let selectValue = document.getElementById("article-count").value;
    loop(selectValue);
}

function inputArticles() {
    let inputValue = document.getElementById("article-input-count").value;
    loop(inputValue);
}

function loop(value) {
    removeAllSections();
    for (let i = 1; i <= value; i++) {
        let parent = document.querySelector("main");

        let child = document.createElement("section");
        let title = document.createElement("h4");
        let content = document.createElement("p");

        title.innerText = "Title " + i;
        content.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
    
        makeEditable(title);
        makeEditable(content);

        child.appendChild(title);
        child.appendChild(content);
        parent.appendChild(child);
    }
}

function makeEditable(elem){
    elem.onclick = function() {
        elem.contentEditable = true;
        elem.focus();
    };
    elem.onblur = function() {
        elem.contentEditable = false;
    };
}

function removeAllSections(){
    let test_sections = document.querySelectorAll("section");
    for (let i = 0; i < test_sections.length; i++){
        test_sections[i].remove();
    }
}

function showInput() {
    let valueInput = document.getElementById("article-input-count");
    let selectorInput = document.getElementById("article-count");
    let changeText = document.getElementById("show-input-btn");

    valueInput.classList.toggle("show-input");
    selectorInput.classList.toggle("hide-input");
    if (selectorInput.classList.contains('hide-input')) {
        changeText.innerText = "Visa dropdown";
    } else {
        changeText.innerText = "Visa input";
    }
}