import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Users')
});
router.route('/users')
    .get(function (req, res) {
        res.json(
            [{ id: 1, name: 'name' }, {id: 2, name : 'user2'}]
            );
    });

module.exports = router;