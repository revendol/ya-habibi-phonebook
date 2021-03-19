var validator = require('validatorjs');


const index = function (req, res, next) {
    var options = { layout: 'layouts/guest', title: 'Sign In' };
    res.render('index', options);

    // res.render('index', { title: 'Express', layout: 'layouts/guest' });
}

const register = function (req, res, next) {
    var options = { layout: 'layouts/guest', title: 'Sign Up' };
    res.render('auth/register', options);
}

const dashoard = function (req, res, next){
    var options = { layout: 'layouts/layout', title: 'Sign Up' };
    res.render('dashboard', options);
}

const postRegister = function (req, res, next){
    var data = req.body;
    var rules = {
        first_name: 'required|min:2',
        last_name: 'required|min:3',
        email: 'required',
        password: 'required|min:8',
    }
    var validation = new validator(data, rules);
    if(validation.passes()){
        //
    } else {
        res.json({error: validation.errors});
    }


}

module.exports ={
    index, register, dashoard, postRegister
}
