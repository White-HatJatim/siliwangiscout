document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    // Function to open the dialog
    function openDialog() {
        overlay.style.display = 'block';
    }

    // Function to close the dialog
    function closeDialog() {
        overlay.style.display = 'none';
    }

    // Open the dialog when the page loads
    openDialog();

    // Close dialog when close button is clicked
    closeButton.addEventListener('click', closeDialog);
});
