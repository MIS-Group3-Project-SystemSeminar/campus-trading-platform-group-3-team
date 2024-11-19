// Import and insert the footer
document.addEventListener('DOMContentLoaded', () => {
    fetch('/trading-post/assets/components/footer.html')  // Correct relative path
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Insert the fetched HTML into the body
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading footer:', error));
});
