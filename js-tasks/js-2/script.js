document.addEventListener('DOMContentLoaded', () => {
    var myForm = document.getElementById('myForm');
    var nameInput = document.getElementById('nameInput');
    var idInput = document.getElementById('idInput');
    var balanceInput = document.getElementById('balanceInput');
    var myTable = document.getElementById('myTable');

    // Function to add a new row to the table
    var addDataToTable = (name, id, balance) => {
        const row = myTable.insertRow();
        // Create and populate cells
        const nameCell = row.insertCell(0);
        nameCell.textContent = name;

        const balanceCell = row.insertCell(1);
        balanceCell.textContent = balance;

        const idCell = row.insertCell(2);
        idCell.textContent = id;

        const actionCell = row.insertCell(3);
        actionCell.innerHTML = `
            <button class="btn btn-sm btn-info me-2 edit-btn">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
        `;

        // Add event listener for the delete button
        actionCell.querySelector('.delete-btn').addEventListener('click', (event) => {
            event.target.closest('tr').remove();
        });

        // Add event listener for the edit button
        actionCell.querySelector('.edit-btn').addEventListener('click', (event) => {
            const rowToEdit = event.target.closest('tr');
            const currentBalance = rowToEdit.cells[1].textContent; 

            // Use prompt to get the new balance
            const newBalanceString = prompt(`Enter new balance for ${rowToEdit.cells[0].textContent} (Current: ${currentBalance}):`);

            // Check if the user entered something and it's a valid number
            if (newBalanceString !== null && newBalanceString.trim() !== '') {
                const newBalance = parseFloat(newBalanceString.trim());
                if (!isNaN(newBalance)) {
                    rowToEdit.cells[1].textContent = newBalance; // Update the balance cell
                } 
            }
        });
    };

    // Event listener for the form submission
    myForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior (page reload)

        var name = nameInput.value;
        var id = idInput.value;
        var balance = balanceInput.value;

        // Basic validation
        if (name && id && balance) {
            addDataToTable(name, id, balance);

            // Clear the form fields after successful submission
            nameInput.values = '';
            idInput.values = '';
            balanceInput.values = '';
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
});