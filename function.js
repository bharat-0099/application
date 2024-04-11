let add_elements = [];
function todo() {
    let itemsref = document.getElementById("items");
    let itemsinput = itemsref.value

    let displayref = document.getElementById("display");



    let itemscontains = '';

    

    if (itemsinput === "") {
        displayref.innerHTML = "<label>Enter todo items</label>";
    } else {
        add_elements.push(itemsinput);
        displayref.innerHTML = "";
        add_elements.forEach((item, index) => {
            displayref.innerHTML += `<th>  <div class='del'><div> ${item}</div><div><button class='button2' onclick='delete_Item(${index})'>Delete</button><button class='button3' onclick='edit(${index})'>Edit</button></div></div> </th>`;
        });


    }
    itemsref.value="";
}
function delete_Item(index) {
    let displayref = document.getElementById("display");
    add_elements.splice(index, 1)
    displayref.innerHTML = "";
    add_elements.forEach((item, index) => {
        displayref.innerHTML += `<th><div class='del'><div> ${item}</div><div><button class='button2' onclick='delete_Item(${index})'>Delete</button><button class='button3' onclick='edit(${index})'>Edit</button></div></div> </th>`;
    });


}
function edit(index) {
    let item = add_elements[index];
    let newItem = prompt("Edit item", item);
    if (newItem !== null && newItem !== "") {
        add_elements[index] = newItem;
    }
    let displayref = document.getElementById("display");
    displayref.innerHTML = "";
    add_elements.forEach((item, index) => {
        displayref.innerHTML += `<th>   <div class='del'><div> ${item}</div><div><button class='button2' onclick='delete_Item(${index})'>Delete</button><button class='button3' onclick='edit(${index})'>Edit</button></div></div> </th>`;
    });

}             