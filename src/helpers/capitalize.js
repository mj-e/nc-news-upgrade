export default function firstLetterCapital (str) {
    return str.split(' ')
        .map(function (x) {
            if (/[^a-z]/.test(x[0])) return x;
            return x.charAt(0).toUpperCase() + x.slice(1);
        }).join(' ');
}