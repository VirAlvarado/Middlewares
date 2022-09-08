module.exports ={
    index: (req, res) => {
        return res.render('index', {tittle : "index"})
    },
    contact: (req, res) => {
        return res.render('index', {tittle : "contact"})
    },
    about: (req, res) => {
        return res.render('index', {tittle : "about"})
    },
    admin: (req, res) => {
        return res.render('index', {tittle : "admin"})
    },
    login: (req, res) => {
        return res.render('login', {tittle : "login"})
    },
    music: (req, res) => {
        return res.render('index', {tittle : "music"})
    },
    notEntry: (req, res) => {
        return res.render('notEntry', {tittle : "notEntry"})
    }
}