const db = require('../utils/db')

class UserController {
    index(req, res) {
        return res.json({
            massage: 'Hello User',
        });
    }
}

module.exports = new UserController()