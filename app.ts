// Product interface to define product structure
// Product interface to define product structure
interface Product {
    name: string;
    quantity: number;
    price: number;
  }
  
  // Array to store products (inventory)
  let products: Product[] = [];
  
  // Function to populate the inventory table
  function populateTable(data: Product[]) {
    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
  
    // Clear existing rows
    tableBody.innerHTML = '';
  
    // Loop through the products and create table rows
    data.forEach((product, index) => {
      const row = document.createElement("tr");
  
      // Create a cell for the row number (#)
      const numberCell = document.createElement("th");
      numberCell.scope = "row";
      numberCell.textContent = (index + 1).toString();
  
      // Create cells for each product property (name, quantity, price)
      const nameCell = document.createElement("td");
      nameCell.textContent = product.name;
  
      const quantityCell = document.createElement("td");
      quantityCell.textContent = product.quantity.toString();
  
      const priceCell = document.createElement("td");
      priceCell.textContent = product.price.toFixed(2); // Display price with 2 decimals
  
      // Append cells to the row
      row.appendChild(numberCell);
      row.appendChild(nameCell);
      row.appendChild(quantityCell);
      row.appendChild(priceCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    });
  }
  
  // Function to validate product inputs
  function validateInputs(name: string, quantity: number, price: number): boolean {
    // Check if the name is non-empty
    if (name.trim() === "") {
      alert("Product name cannot be empty.");
      return false;
    }
  
    // Check if quantity and price are positive numbers
    if (quantity <= 0) {
      alert("Quantity should be a positive number.");
      return false;
    }
  
    if (price <= 0) {
      alert("Price should be a positive number.");
      return false;
    }
  
    return true;
  }
  
  // Function to add a new product to the inventory
  function addProduct() {
    const productNameInput = document.getElementById("productName") as HTMLInputElement;
    const productQuantityInput = document.getElementById("productQuantity") as HTMLInputElement;
    const productPriceInput = document.getElementById("productPrice") as HTMLInputElement;
  
    // Get values from the input fields
    const name = productNameInput.value.trim();
    const quantity = Number(productQuantityInput.value);
    const price = Number(productPriceInput.value);
  
    // Validate inputs before adding the product
    if (!validateInputs(name, quantity, price)) {
      return; // Stop if validation fails
    }
  
    // Create a new product object
    const newProduct: Product = { name, quantity, price };
  
    // Add the new product to the products array
    products.push(newProduct);
  
    // Repopulate the table with the updated products array
    populateTable(products);
  
    // Clear the input fields after adding the product
    productNameInput.value = "";
    productQuantityInput.value = "";
    productPriceInput.value = "";
  }
  
  // Add event listener to the 'Add Product' button
  document.getElementById("addProductBtn")?.addEventListener("click", addProduct);
  
  // Initial population of the table (if there are any initial products)
  populateTable(products);
  