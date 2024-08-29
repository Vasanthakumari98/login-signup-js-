
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.getElementById('sign-up-form').addEventListener('sign-up', (event) => {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('signup-success-message').innerText = 'Successfully registered!';
    document.getElementById('signup-success-message');
    // Hide the message after 3 seconds
    setTimeout(() => {
        document.getElementById('sign-up-success-message');
    }, 3000);
});

document.getElementById('sign-in-form').addEventListener('sign-in', (event) => {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('sign-in-success-message').innerText = 'Successfully signed in!';
    document.getElementById('sign-in-success-message');
    // Hide the message after 3 seconds
    setTimeout(() => {
        document.getElementById('sign-in-success-message');
    }, 3000);
});
