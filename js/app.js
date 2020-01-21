const rootEl = document.getElementById('root')

rootEl.innerHTML = `
<form data-id="purchase-add-form">
<label for="purchase-input-amount">Сумма</label>
<input id="purchase-input-amount" data-id="purchase-input-amount">
<label for="purchase-input-category">Категория</label>
<input id="purchase-input-category" data-id="purchase-input-category">
<button data-action="purchase-add">Добавить</button>
</form>
<div data-id="purchases-total">0</div>
`

const purchaseAddFormEl = rootEl.querySelector('[data-id=purchase-add-form]')

const purchaseInputAmounEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-amoun]')

const purchaseInputCategoryEl = purchaseAddFormEl.querySelector('[data-id=purchase-input-category]')
const purchaseAddButtonEl = purchaseAddFormEl.querySelector('[data-action=purchase-add]')

purchaseAddButtonEl.onclick = evt => {
  evt.preventDefault()
}