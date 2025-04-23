//DOMContentLoaded ensures that the script runs only after the HTML document has been fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown selection
    const dropdownSelected = document.querySelector('.dropdown-selected');
    const dropdownOptions = document.querySelector('.dropdown-options');
    const dropdownOptionElems = document.querySelectorAll('.dropdown-option');
    const hiddenTypeInput = document.getElementById('type');
    
    // Toppings & Extras checkboxes
    const toppingCheckboxes = document.querySelectorAll('.topping-checkbox');
    const extraCheckboxes = document.querySelectorAll('.extra-checkbox');
    
    // Price & Quantity elements
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    const priceTag = document.querySelector('.price-tag');
    const quantityDisplay = document.getElementById('quantity');
    
    // Initialize price and quantity
    let basePrice = 5;
    let quantity = 1;
  
    // Show dropdown options when clicked, it checks if the options are already visible (display: block). If so, it hides them (display: none), and if not, it shows them
    dropdownSelected.addEventListener('click', () => {
      dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
    });
  
    // Update pancake type and base price when an option is clicked
    dropdownOptionElems.forEach(option => {
      option.addEventListener('click', () => {
        basePrice = parseInt(option.dataset.value);
        hiddenTypeInput.value = basePrice;
        dropdownSelected.textContent = option.querySelector('.name').textContent;
        dropdownOptions.style.display = 'none';
        updateTotal();
      });
    });
  
    // Update total price when toppings or extras are changed
    toppingCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotal);
    });
    
    extraCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotal);
    });
  
    // Quantity controls
    document.getElementById('increase').addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
      updateTotal();
    });
  
    document.getElementById('decrease').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        updateTotal();
      }
    });
  
    // Update the total price based on selection
    function updateTotal() {
      let toppingsTotal = [...toppingCheckboxes].filter(cb => cb.checked).length * 1;
      let extrasTotal = [...extraCheckboxes].filter(cb => cb.checked).reduce((sum, cb) => sum + parseInt(cb.dataset.price), 0);
      let total = (basePrice + toppingsTotal + extrasTotal) * quantity;
      
      // Apply the pop animation to the price tag
      priceTag.classList.add('pop-animation');
      setTimeout(() => {
        priceTag.classList.remove('pop-animation');
      }, 300);  // Duration matches the CSS animation
      
      totalPriceDisplay.textContent = total.toFixed(2).replace('.', ',') + ' €';
      priceTag.textContent = total.toFixed(2).replace('.', ',') + '€';
    }
  
    // Initialize total price
    updateTotal();
  });
  