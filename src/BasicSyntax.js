export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    const alph = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    if (str.length === 0) {
        return result;
    }

    for (let i = 0; i < str.length; ++i) {
        const cur = alph[str[i]];
        const next = alph[str[i + 1]];

        if (next !== undefined && cur < next) {
            result -= cur;
        } else {
            result += cur;
        }
    }

    return result;
}
