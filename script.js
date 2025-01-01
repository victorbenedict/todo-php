fetch('getTodos.php')
  .then((response) => response.json())
  .then((todos) => {
    const todoList = document.getElementById('todo-list');
    todos.forEach((todo) => {
      const listItem = document.createElement('li');
      const checkIcon = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      checkIcon.setAttribute('aria-hidden', 'true');
      checkIcon.setAttribute('fill', 'currentColor');
      checkIcon.setAttribute('viewBox', '0 0 20 20');
      const checkIconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      checkIconPath.setAttribute(
        'd',
        'M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z'
      );
      checkIcon.appendChild(checkIconPath);

      const checkIconClass = (+todo.status && 'greenCheck') || 'grayCheck';
      checkIcon.setAttribute('class', checkIconClass);
      const label = document.createElement('span');
      label.textContent = todo.todo;
      const optionPanel = document.createElement('div');
      optionPanel.setAttribute('class', 'optionPanel');
      const editButton = document.createElement('div');
      editButton.textContent = '🖊️';
      const deleteButton = document.createElement('div');
      deleteButton.textContent = '❌';
      optionPanel.appendChild(editButton);
      optionPanel.appendChild(deleteButton);

      listItem.appendChild(checkIcon);
      listItem.appendChild(label);
      listItem.appendChild(optionPanel);

      checkIcon.addEventListener('click', () => {
        toggleStatus(todo.id);
      });

      listItem.addEventListener('mouseover', () => {
        optionPanel.style.visibility = 'visible';
      });

      listItem.addEventListener('mouseleave', () => {
        optionPanel.style.visibility = 'hidden';
      });

      todoList.appendChild(listItem);
    });
  });

async function toggleStatus(id) {
  try {
    const response = await fetch('toggleStatus.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `id=${id}`,
    });

    if (response.ok) {
      location.reload();
    } else {
      console.error('Failed to toggle status:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
