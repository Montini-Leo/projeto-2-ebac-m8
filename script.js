document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name-input');
    var phoneInput = document.getElementById('phone-input');

    var name = nameInput.value;
    var phone = phoneInput.value;

    if (name !== '' && phone !== '') {
        var table = document.getElementById('contact-table');

        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var phoneCell = row.insertCell(1);

        nameCell.textContent = name;
        phoneCell.textContent = phone;

        nameInput.value = '';
        phoneInput.value = '';
    }
});