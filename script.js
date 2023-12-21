
        const todoList = document.getElementById('todo-list');
        const doneList = document.getElementById('done-list');
        const titleInput = document.getElementById('title');
        const detailsInput = document.getElementById('details');

        function addTodo() {
            const title = titleInput.value.trim();
            const details = detailsInput.value.trim();

            if (title === '' || details === '') {
                alert('Please enter both title and details.');
                return;
            }

            const listItem = document.createElement('ul');
            listItem.innerHTML = `<div class="text-center">
                                    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                                    <div class="card-body">
                                        <h1 class="card-title">${title}</h1>
                                        <p class="card-text">${details}</p>
                                    </div>
                                    </div>
                                    </div>
                               `;
            todoList.appendChild(listItem);

            titleInput.value = '';
            detailsInput.va
            lue = '';
        }

        function reset() {
            while (todoList.firstChild) {
                todoList.removeChild(todoList.firstChild);
            }

            while (doneList.firstChild) {
                doneList.removeChild(doneList.firstChild);
            }
        }        

        function processTodo(strategy) {
            const items = Array.from(todoList.children);

            if (strategy === 'fifo') {
                items.forEach(item => doneList.appendChild(item));
            } else if (strategy === 'lifo') {
                for (let i = items.length - 1; i >= 0; i--) {
                    doneList.appendChild(items[i]);
                }
            }

            while (todoList.firstChild) {
                todoList.removeChild(todoList.firstChild);
            }
        }


