exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: `findOne handler with id=${req.params.id}` });
};

exports.update = (req, res) => {
    res.send({ message: `update handler with id=${req.params.id}` });
};

exports.delete = (req, res) => {
    res.send({ message: `delete handler with id=${req.params.id}` });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};
