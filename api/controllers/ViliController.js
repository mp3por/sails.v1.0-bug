/**
 * ViliController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    omg: function(req, res) {
        console.log('ViliController#omg');
        res.json({ ok: true });
    }

};