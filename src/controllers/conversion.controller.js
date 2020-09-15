function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};

function counterRotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]);
        result.push(row);
    }
    return result.reverse();
};


module.exports = {
    execute(req, res) {
        const n = req.body.n;
        const matrix = req.body.matrix;
        if (!n) {
            throw Error("Se requiere el valor de n");
        } else if (!Number.isInteger(n)) {
            throw Error("n debe ser un numero entero");
        }
        if (!matrix) {
            throw Error("Se requiere el valor de matrix");
        } else if (!Array.isArray(matrix)) {
            throw Error("matrix debe ser una matriz");
        }
        let output = matrix;
        for (let i = 0; i < Math.abs(n); i++) {
            if (n > 0) {
                output = rotate(output);
            } else {
                output = counterRotate(output);
            }
        }

        res.status(200).json({ input: matrix, n, output });
    },
} 