const rootEl = document.getElementById('root');

rootEl.innerHTML = `
<form data-id="purchase-add-form">
    <label for="purchase-input-amount">Сумма</label>
    <input id="purchase-input-amount" data-id="purchase-input-amount" type="number">
    <label for="purchase-input-category">Категория</label>
    <input id="purchase-input-category" data-id="purchase-input-category">
    <button data-action="purchase-add">Добавить</button>
</form>
<div data-id="purchases-total">Сумма: 0</div>
`;

const purchaseAddFormEl = rootEl.querySelector('[data-id=purchase-add-form]');

const purchaseInputAmountEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-amount]');
const purchaseInputCategoryEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-category]');
const purchaseAddButtonEl = purchaseAddFormEl.querySelector('[data-action=purchase-add]');

let purchasesTotal = 0; // разделяем то, как данные хранятся и то, как отображаются

purchaseAddButtonEl.onclick = evt => {
    evt.preventDefault();

    const value = purchaseInputAmountEl.value; // всё, что приходит из полей ввода - string
    purchasesTotal +=parseInt(value, 10);
    purchasesTotalEl.textContent = `Сумма: ${purchasesTotal}`;

    purchaseInputAmountEl.value = '';
    purchaseInputCategoryEl.value = '';
};

const purchasesTotalEl = rootEl.querySelector('[data-id=purchases-total]');

