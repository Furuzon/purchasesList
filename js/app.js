const rootEl = document.getElementById('root');

rootEl.innerHTML = `
<form data-id="purchase-add-form">
    <label for="purchase-input-amount">Сумма</label>
    <input id="purchase-input-amount" data-id="purchase-input-amount" >
    <label for="purchase-input-category">Категория</label>
    <input id="purchase-input-category" data-id="purchase-input-category">
    <button data-action="purchase-add">Добавить</button>
</form>
<ul data-id="purchases-list"></ul>
<div data-id="purchases-total">Сумма: 0</div>
`;

const purchaseAddFormEl = rootEl.querySelector('[data-id=purchase-add-form]');

const purchaseInputAmountEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-amount]');
const purchaseInputCategoryEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-category]');
const purchaseAddButtonEl = purchaseAddFormEl.querySelector('[data-action=purchase-add]');
const purchasesListEl = rootEl.querySelector('[data-id=purchases-list]')

let purchasesTotal = 0; // разделяем то, как данные хранятся и то, как отображаются

purchaseAddButtonEl.onclick = evt => {
    evt.preventDefault();

    const value = purchaseInputAmountEl.value; // всё, что приходит из полей ввода - string
    purchasesTotal +=parseInt(value, 10);
    const category = purchaseInputCategoryEl.value
    purchasesTotalEl.textContent = `Сумма: ${purchasesTotal}`;

    const purchaseEl = document.createElement('li')
    purchaseEl.innerHTML = `
    Покупка на сумму ${value}, в категории ${category}
    <button data-action="up">X</button>
    <button data-action="down">X</button> 
    <button data-action="remove">X</button>
    `
    const purchaseRemoveButtonEl = purchaseEl.querySelector('[data-action=remove]')
    purchaseRemoveButtonEl.onclick = () => {
        purchaseEl.remove();
        purchasesTotal -= value;
        purchasesTotalEl.textContent = ``
    }

    purchasesListEl.insertBefore(purchaseEl, purchasesListEl.firstElementChild)

    purchaseInputAmountEl.value = '';
    purchaseInputCategoryEl.value = '';

    purchaseInputAmountEl.focus();
};

const purchasesTotalEl = rootEl.querySelector('[data-id=purchases-total]');

