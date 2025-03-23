import ListItem from "./list_item.js";

function init()
{
    // DOM elements
    const el_ulList = document.querySelector('#js-todo-list')
    const el_addBtn = document.querySelector('#js-btn-add-item');
    const item_data = "Item";

    const listItem = new ListItem(el_ulList, el_addBtn, item_data);
}

window.onload = function()
{
    init();
}


