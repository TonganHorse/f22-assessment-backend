const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const submitBtn = document.getElementById('submitButton')
let form = document.getElementById('signup')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        alert(res.data);
    });
};

const postUser = () => {
    axios.post("http://localhost:4000/api/users", userObj)
    .then(res => {
        alert(res.data)
    })
    .catch(error => {
        console.log(error)
    })
    
}
let first = document.querySelector('#firstname')
    let last = document.querySelector('#lastname')


    let userObj = {
        firstname: first.value,
        lastname: last.value
    }
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', postUser)

