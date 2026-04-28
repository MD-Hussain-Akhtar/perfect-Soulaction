exports.LoginControler = (req, res) => {
  res.render("login", { pageTitle: "Login", username: null, active: "Login" });
};

exports.LoginPostControler = (req, res) => {
  const { username, password } = req.body;

  if (username === "Hussain" && password === "123") {
    return res.redirect("/author");
  }

  return res.render("login", {
    pageTitle: "Login",
    active: "Login",
    errorMessage: "Invalid username or password"
  });
};