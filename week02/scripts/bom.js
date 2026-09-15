const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        // Create the list item
        const li = document.createElement('li');

        // Put the chapter text inside the list item
        li.textContent = input.value;

        // Create the delete button
        const deleteButton = document.createElement('button');

        // Add the ❌ symbol
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove chapter');

        // Delete the list item when the button is clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the list
        list.append(li);

        // Clear the input box
        input.value = '';

        // Put the cursor back in the input
        input.focus();
    }
});