exports.contactUs = (req, res, next) => {
    res.render('contact', {
        pageTitle: 'ContactUs',
        path: '/contact',
        activeShop: true,
        productCSS: true
    });
};
