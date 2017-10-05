function add(req, res) {
    var op1 = Number(req.body.op1);
    var op2 = Number(req.body.op2);
    var result = op1 + op2;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result}));
}

function sub(req, res) {
    var op1 = Number(req.body.op1);
    var op2 = Number(req.body.op2);

    var result = op1 - op2;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result}));
}

function mult(req, res) {
    var op1 = Number(req.body.op1);
    var op2 = Number(req.body.op2);

    var result = op1 * op2;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result}));
}

function div(req, res) {
    var op1 = Number(req.body.op1);
    var op2 = Number(req.body.op2);

    var result = op1 / op2;

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({result: result}));
}

exports.add = add;
exports.sub = sub;
exports.mult = mult;
exports.div = div;