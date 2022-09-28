document.getElementById("plus").onclick = () => { // press the plus (add note button)

    document.getElementById("hidden").classList.toggle("active"); //set the scale to 1/0

    document.getElementById("add").onclick = () => {
        let text = document.getElementById("text").value;

        let tag = document.createElement("div");
        tag.classList.add("note");
        tag.id = "NOTE";
        let content = document.createTextNode(text);
        tag.appendChild(content);
        document.getElementById("road").appendChild(tag);
        document.getElementById("hidden").classList.toggle("active");//set the scale to 1/0
    }

    document.getElementById("cancel").onclick = () =>{
        document.getElementById("hidden").classList.toggle("active");//set the scale to 1/0
    }   
}

document.getElementById("delete").onclick = () =>{

    alert("To delete a note click on it  ");

    document.getElementById("NOTE").onclick = () => {
        document.getElementById("NOTE").remove();
    }
}