export default function IntToStrFunc(int) {
    let newStr = ''
    let str = String(int);
    if (str.length <= 4) {
        newStr = str.slice(0, 1) + ' ' + str.slice(1, 4) + ' ' + '₽';

    } else {
        newStr = str.slice(0, 2) + ' ' + str.slice(2, 5) + ' ' + '₽';

    }
    return newStr
}