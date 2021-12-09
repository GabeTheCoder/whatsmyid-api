
const format = ['c', 'a', 'an', 'n', 'a', 'an', 'n', 'a', 'a', 'n', 'n'];
const c = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const n = ['0', ...c];
const a = ['A', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y'];
const an = [...a, ...n];

const select = available => available[Math.floor(Math.random() * available.length)];
const check = (available, value) => available.includes(value);

const types = { c, n, a, an };

const generate = () => {
    let output = '';

    for (const type of format) {
        output += select(types[type])
    }

    return output;
};

const verify = value => {
    if (value.length !== format.length) return false;

    for (let index = 0; index < format.length; index++) {
        const type = format[index];
        if (!check(types[type], value[index])) return false;
    }

    return true;
};

export default { generate, verify };
