
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((albums) => displayAlbum(albums));
});

function displayAlbum(albums) {
    const albumDiv = document.getElementById("albumData");
    albums.forEach((album) => {
        const albumContainer = document.createElement("div");
        albumContainer.classList.add("albumContainer");
        albumContainer.innerHTML = `
            <h4 class="album-title" data-bs-toggle="modal" data-bs-target="#photoModal" data-album-id="${album.id}">${album.title}</h4>`;
        albumDiv.append(albumContainer);
    });


    document.querySelectorAll('.album-title').forEach(title => {
        title.addEventListener('click', function () {
          const albumId = this.getAttribute('data-album-id');
            fetchAlbumPhotos(albumId);
        });
    });
}

function fetchAlbumPhotos(albumId) {
    const modalPhotosContainer = document.getElementById("modal-photos");
    const photosUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;

    fetch(photosUrl)
        .then((response) => response.json())
        .then((photos) => {
          modalPhotosContainer.innerHTML = '';
          
            photos.forEach((photo) => {
              const photoElement = document.createElement('img');
              photoElement.classList.add('photoEle');
                photoElement.src = photo.thumbnailUrl;
                photoElement.alt = photo.title;
                modalPhotosContainer.appendChild(photoElement);
            });
        })
       
}





