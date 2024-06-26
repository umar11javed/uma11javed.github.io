document.getElementById('save-review').addEventListener('click', function() {
    const reviewText = document.getElementById('review').value;
    const imageUpload = document.getElementById('image-upload').files[0];

    if (!reviewText || !imageUpload) {
        alert('Please add an image and write a review.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        reviewContainer.appendChild(imageElement);

        const reviewParagraph = document.createElement('p');
        reviewParagraph.textContent = reviewText;
        reviewContainer.appendChild(reviewParagraph);

        document.getElementById('reviews-container').appendChild(reviewContainer);

        // Clear the form
        document.getElementById('review').value = '';
        document.getElementById('image-upload').value = '';
    };

    reader.onerror = function() {
        console.error("There was an error reading the file!");
        alert("Failed to load the image. Please try again.");
    };

    reader.readAsDataURL(imageUpload);
});
