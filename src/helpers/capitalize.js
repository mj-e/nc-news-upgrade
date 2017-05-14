export default function firstLetterCapital (str) {
    return str.split(' ')
        .map(function (x) {
            return x.charAt(0).toUpperCase() + x.slice(1);
        }).join(' ');
}