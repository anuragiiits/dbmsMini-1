const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/logout_user", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};