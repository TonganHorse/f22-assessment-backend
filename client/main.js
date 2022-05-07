const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const newFortuneBtn = document.getElementById('new-fortune-button')
const newFortuneInput = document.getElementById('new-fortune')
const deleteBtn = document.getElementById('delete-fortune')
const deleteInput = document.getElementById('delete-input')
const displayFortunes = document.getElementById('display-fortunes')
const idToChange = document.getElementById('compliment-to-change')
const replaceCompliment = document.getElementById('new-compliment')
const changeNameBtn = document.getElementById('change-name-at-id')




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
const addFortune = () => {
    const newFortune = newFortuneInput.value
    axios.post("http://localhost:4000/api/fortune/", {newFortune})
    .then(res => {
        alert('new fortune added')
        newFortuneInput.value = ''

        
        let fortuneList = document.createElement('div')
        displayFortunes.append(fortuneList)
        fortuneList.textContent = newFortune
    })
}
const deleteFortune = () => {
    axios.delete(`http://localhost:4000/api/fortune/${deleteInput.value}`)
    .then(res => {
        alert(res.data)
    })
}
const changeCompliment = () => {

const compliment = replaceCompliment.value
    axios.put(`http://localhost:4000/api/compliment/${idToChange.value}` ,{compliment})
    .then(res => {
        alert(`element changed`)
    })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
newFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener('click', deleteFortune)
changeNameBtn.addEventListener('click', changeCompliment)



