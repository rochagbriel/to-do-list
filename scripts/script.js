function newItem () {

    // Add a new item to the list of items:

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
        // Clean the input text
        $('#input').val('');
    }
    

    // Crossing out an item from the list of items:

    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // Add the Delete button "X"

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    
    function deleteListItem() {
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListItem);

    // Reorder the items:

    $('#list').sortable();
}