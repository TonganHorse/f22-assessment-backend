
let users = []
let globalId = 1

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A feather in the hand is better than a bird in the air.']

        let random = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[random]

        res.status(200).send(randomFortune)
    }, 
    postUser: (req, res) => {
        console.log(req.body)
        
        let {firstname, lastname} = req.body

        let newUser = {
            id: globalId,
            firstname,
            lastname,
        }
        users.push(newUser)
        res.status(200).send(users)
    }

}