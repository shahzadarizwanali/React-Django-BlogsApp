// Simple live search functionality for Django admin
document.addEventListener('DOMContentLoaded', function() { 
    const searchInput = document.querySelector('#searchbar, input[name=q]');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();

        const rows = document.querySelectorAll('.results tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query) ? '' : 'none';
        });
    });
});
