export default class ListItem
{
    constructor(parent_node, add_btn, todo_item)
    {
        this.parent_node = parent_node;
        this.add_btn = add_btn;
        this.todo_item = todo_item;
        this.count = 0;

        // Event listener for add btn 
        this.add_btn.addEventListener('click', this.addItem.bind(this));
    }

    addItem()
    {
        this.count += 1;
        const item = document.createElement('li');
        item.textContent = this.todo_item + " " + this.count;
        this.parent_node.appendChild(item);
    }
}