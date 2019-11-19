import routes from "../router";

export const home = (req,res) => res.render("index.html");
export const bbq = (req,res) => res.render("bbq.html");
export const getSignin = (req,res) => {
    res.render("signin.html");
}
export const restaurant = (req,res) => res.render("h-Restaurant.html");
export const chicken = (req,res) => res.render("h-Chicken.html");
export const building = (req,res) => res.render("h-Building.html");
export const truck = (req,res) => res.render("h-Truck.html");


export const postSignin = (req,res) => {
    const {
        body: {id,password,password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("signin.html");
    } else{
        res.redirect(routes.home)
    }
    
}
export const getLogin = (req,res) => {
    res.render("login.html");
}
export const postLogin = (req,res) => {
    res.redirect(routes.home);
}
export const logout = (req,res) => res.render("logout.html");