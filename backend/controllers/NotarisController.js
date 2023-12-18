const db = require('../utils/db')

class NotarisController {
    async jasaNotaris(req, res) {
        const data = await db.promise().query(`SELECT * FROM (status_notaris JOIN notaris USING(status_notaris_id))`)

        return res.json({
            data: data[0],
        });
    }
}

module.exports = new NotarisController()