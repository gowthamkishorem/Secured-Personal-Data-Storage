const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.render('dashboard/index');
});
router.get('/newdata', (req, res) => {
    res.render('dashboard/add_new_type');
});
router.get('/newdata/general', (req, res) => {
    res.render('dashboard/add_new_general');
});
router.get('/newdata/password', (req, res) => {
    res.render('dashboard/add_new_password');
});
router.get('/checkdata/:id', (req, res) => {
    const { id } = req.params;
    res.render('dashboard/view_data', { dataid: id });
});

module.exports = router;
