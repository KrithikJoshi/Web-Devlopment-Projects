const { Client, Account, ID } = Appwrite;

const client = new Client();

const account = new Account(client);

const EmailInput = document.querySelector(".firstinput");
const PassInput = document.querySelector(".secondinput");
const signinBtn = document.querySelector(".signin-btn");

let email = "";
let password = "";

EmailInput.addEventListener("change", (e) => {
  email = e.target.value;
  console.log(email);
});

PassInput.addEventListener("change", (e) => {
  password = e.target.value;
  console.log(password);
});

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createAccount(email, password)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64e66dafa67af1d85ac4"); // Your project ID

const createAccount = async (email, password) => {
  try {
    const promise = await account.create(ID.unique(), email, password);
    console.log(promise);
    return promise;
  } catch (error) {
    console.log(error);
  }
};
