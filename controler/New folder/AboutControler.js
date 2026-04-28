exports.AboutControler = (req, res) => {
  res.render("about", { pageTitle: "About", active: "About" });
};