// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector(`.quantity input`);
  const subtotalElement = product.querySelector(`.subtotal span`);
  const total = Number(priceElement.innerHTML) * Number(quantityElement.value);
  subtotalElement.innerHTML = total;

  return total;
}
function calculateAll() {
  // ITERATION 2
  const productElement = document.getElementsByClassName(`product`);
  let total = 0;
  for (const elem of productElement){
    total = total+updateSubtotal(elem);
  }


  // ITERATION 3
  const costElement = document.querySelector('#total-value span');
  costElement.innerHTML = total;

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  target.parentNode.parentNode.remove();
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const productTable = document.querySelector(`tbody`)
  const newProductName = document.querySelector(`input[placeholder="Product Name"]`)
  const newProductPrice = document.querySelector(`input[placeholder="Product Price"]`)

  const newProductItem = document.createElement(`tr`)
  newProductItem.innerHTML = `
  <tr class="product">
          <td class="name">
            <span>${newProductName.value}</span>
          </td>
          <td class="price">$<span>${newProductPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `

  newProductItem.setAttribute(`class`, "product")
  productTable.appendChild(newProductItem);
  newProductItem.querySelector(`.btn-remove`).addEventListener(`click`, removeProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll(`.btn-remove`)
  removeButton.forEach(button => {
    button.addEventListener(`click`, removeProduct)
  })

    const createButton = document.getElementById(`create`)
    createButton.addEventListener(`click`, createProduct)
})
