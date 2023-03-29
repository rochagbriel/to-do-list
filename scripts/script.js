function newItem () {
    // Add a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = $(inputValue).text();
    li.append(text);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append('li')
    }

}