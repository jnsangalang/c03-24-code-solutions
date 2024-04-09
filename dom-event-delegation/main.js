'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('The $taskList query failed');
function taskClick(event) {
  const $eventTarget = event.target;
  if (!$eventTarget) throw new Error('The $eventTarget query failed');
  console.log('The event target:', $eventTarget);
  console.log('The tagName:', $eventTarget.tagName);
  if ($eventTarget.tagName === 'BUTTON') {
    const $taskListItem = $eventTarget.closest('.task-list-item');
    if (!$taskListItem) throw new Error('The $taskListItem query failed');
    console.log('Closest task list item:', $taskListItem);
    $taskListItem.remove();
  }
}
$taskList.addEventListener('click', taskClick);
