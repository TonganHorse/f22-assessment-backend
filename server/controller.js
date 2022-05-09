const res = require("express/lib/response");

const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A feather in the hand is better than a bird in the air.']
const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];


module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {

        let random = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[random]

        res.status(200).send(randomFortune)
    }, 
    addFortune: (req, res) => {
            const { newFortune } = req.body
            fortunes.push(newFortune)
            res.send(fortunes)
    },
    deleteFortune: (req, res) => {
         let {id} = req.params
         fortunes.splice(id, 1)
         res.status(200).send(`deleted the fortune at ${id}`)
    }, 
    changeCompliment: (req, res) => {
        let { compliment } = req.body
        let { id } = req.params
        
        for(let i = 0; i < compliments.length; i++) {
            if(i === +id) {
                compliments[i] = compliment
            }
        }
        console.log(compliments)
       res.status(200).send(compliments)
    
    }
    
}