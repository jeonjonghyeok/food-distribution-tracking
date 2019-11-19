router.get("/h-Truck", function(req, res, next) {
    if (req.session.logined) res.render("logout", { session: req.session });
    else {
      res.render("login", { session: req.session });
    }
  });