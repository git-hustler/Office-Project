function authenticateUser() {
    const url = ('https://jsonplaceholder.typicode.com/users')
    
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    fetch(url)
    .then(response => response.json())
        .then(users => {
            const authenticateUser = users.find(user => user.username === userName && user.email === email);
            
            if (authenticateUser) {
                window.location.href = '/src/posts/posts.html';
            } else {
                alert('Invalid Username or Email');
            }
        })
       
    
}  


            