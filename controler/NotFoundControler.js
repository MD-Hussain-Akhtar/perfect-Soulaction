exports.NotFoundControler = ((req, res) => {
  res.status(404).render('404', { active: '' })
});
