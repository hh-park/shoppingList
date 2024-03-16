const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // 1. Get input text
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2. Create new item(text+delete btn)
  const item = createItem(text);
  // 3. Add item into items
  items.appendChild(item);
  // 4. Scroll to new item
  item.scrollIntoView({ block: 'center' });
  // 5. Init input text
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', () => {
  onAdd();
});

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

const inputArea = document.querySelector('#inputArea');
const shopping = document.querySelector('.shopping');
let listCnt = 0;

inputArea.addEventListener('keyup', (e) => {
  const inputValue = document.querySelector('#inputArea').value;
  if (e.key == 'Enter') {
    listCnt++;
    const li = document.createElement('li');
    li.setAttribute('id', `li_${listCnt}`);
    // li.setAttribute('class', 'item');
    li.textContent = inputValue;

    const btn = document.createElement('button');
    btn.textContent = 'delete';
    btn.setAttribute('class', 'deleteBtn');
    btn.setAttribute('onclick', `deleteList(${listCnt})`);
    btn.setAttribute('style', 'background-color:white;');
    li.appendChild(btn);
    shopping.appendChild(li);
    inputArea.value = '';
  }
});

function deleteList(cnt) {
  const list = shopping.querySelector(`#li_${cnt}`);
  shopping.removeChild(list);
}
