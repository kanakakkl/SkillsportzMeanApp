var fixtureRouter = require('../routes/adfixture.route');
var squadRouter = require('../routes/adsquad.route');

module.exports = function(app) {
    app.use("/adfixture",fixtureRouter);
    app.use("/adsquad",squadRouter);
};