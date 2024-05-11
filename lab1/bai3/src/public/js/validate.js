
const dom = document.getElementById('root');

dom.innerHTML = `
    <form class="max-w-sm mx-auto mt-12">
        <h1 class="text-2xl text-red-500">Login</h1>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required/>
            <p id="error-email" class="hidden">Email must have a type of email pattern!</p>
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required/>
            <p id="error-password" class="hidden">Password must have the number of character greater than 6</p>
        </div>
        <button type="submit" id="btn-submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">btn-submit</button>
    </form>
`

const emailValue = document.getElementById('email').value;
const passwordValue = document.getElementById('password').value;

// class ValidatePassword {
//     checkLength(password) {
//         const emailValue = document.getElementById('email').value;
//         const passwordValue = document.getElementById('password').value;
//         console.log("what?");
//         if(password.length < 6) {
//             const errorPassword = document.getElementById("error-password");
//             const btn = document.getElementById('btn-submit');
//             btn.addEventListener("click", (e) => {
//                 e.preventDefault()
//                 errorPassword.className = "text-red-400";
//                 setTimeout( () => {
//                     errorPassword.className = "hidden";
//                 }, 2000)
//             });
//         }
//     }
// }

// class ValidateEmail {
//     checkPattern(email) {
//         console.log("what is email?");
//         const re = /^\S+@\S+\.\S+$/;
//         console.log("result::", re.test(email));
//         if(re.test(email)) {
//             const errorEmail = document.getElementById("error-email");
//             const btn = document.getElementById('btn-submit');
//             btn.addEventListener("click", (e) => {
//                 e.preventDefault()
//                 errorEmail.className = "text-red-400";
//                 setTimeout( () => {
//                     errorEmail.className = "hidden";
//                 }, 2000)
//             });
//         }
//     }
// }

// // const btn = document.getElementById('btn-submit');
// const validatePass = new ValidatePassword();
// validatePass.checkLength(passwordValue);
// const validateEmail = new ValidateEmail();
// validateEmail.checkPattern(emailValue);