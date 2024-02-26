document.addEventListener("DOMContentLoaded", function () {
fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
       .then(pic => displayPhotos(pic)  )
})

function displayPhotos(image) {
    const photoGallery = document.getElementById("ImageData");

    image.forEach(photo => {
      const photoCard = document.createElement("div");
      photoCard.classList.add("photoCard");

      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;

      const title = document.createElement("p");
      title.textContent = photo.title;

      photoCard.appendChild(img);
      photoCard.appendChild(title);

      photoGallery.appendChild(photoCard);
    });
}
