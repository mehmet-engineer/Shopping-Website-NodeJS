function get_404(req, res, next) {
    res.status(404).render("error/404.pug", { title: "Error 404. Page Not Found." });
};

module.exports.get_404 = get_404;
