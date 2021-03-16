const index = function (req, res, next) {
    var options = { layout: 'layouts/guest', title: 'Sign In' };
    res.render('index', options);

    // res.render('index', { title: 'Express', layout: 'layouts/guest' });
}

const register = function (req, res, next) {
    var options = { layout: 'layouts/guest', title: 'Sign Up' };
    res.render('auth/register', options);
}

module.exports ={
    index, register
}
