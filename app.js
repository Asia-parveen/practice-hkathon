"use strict";
// Sample data to populate the table
const products = [
    { name: 'cloths', quantity: 28, price: 99 },
    { name: 'shoes', quantity: 30, price: 30 },
    { name: 'bags', quantity: 20, price: 22 },
];
// Function to populate the table with data
function populateTable(data) {
    const tableBody = document.querySelector("#dataTable tbody");
    // Clear the existing rows
    tableBody.innerHTML = '';
    // Loop through the data and create rows
    data.forEach((product) => {
        const row = document.createElement("tr");
        // Create cells for each data field
        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        const quantityCell = document.createElement("td");
        quantityCell.textContent = product.quantity.toString();
        const priceCell = document.createElement("td");
        priceCell.textContent = product.price.toString();
        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}
// Populate the table with sample data
populateTable(products);
