
class HelloController {
    async index(req, res) {
        return res.json({ hello: 'tudo bem' });
    }
}

export default new HelloController();