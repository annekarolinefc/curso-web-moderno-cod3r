let calculator = (a, b, operator) => {
    return eval(`${a} ${operator} ${b}`);
}

let result = calculator(50, 2, "/");
console.log(result);