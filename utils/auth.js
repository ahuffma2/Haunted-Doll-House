//DETERMINE THE BEHAVIOUR OF WHAT HAPPENS WHEN A ROUTE IS ACCESSED WITHOUT AUTHORIZATION

const withAuth = (req,res,next) => {
    !req.session.logged_in 
        ? res.redirect('/login') //Will send to login page when not authorized. Might change this to just posting an error
        : next()
}

module.exports = withAuth;