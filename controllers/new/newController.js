const getNew = (req, res) => {
  res.render("form", {title: 'Add new message'});
};

module.exports = { getNew };
