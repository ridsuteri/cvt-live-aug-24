function showHomepage (req, res){
    const {userid} = req.params
    console.log(userid);
    res.render('./home.ejs')
}

function query (req, res) {
    const query = req.query
    console.log(query)
    res.render('./home.ejs')
}

function showDetails (req, res){
    res.render('./dashboard.ejs', {username: 'admin', email: 'riddhi@google.com' })
}

function showDashboard (req, res){
    res.render('./dashboard.ejs', {username: 'admin', email: 'riddhi@google.com' })
}


module.exports = {showHomepage, showDashboard, showDetails, query}