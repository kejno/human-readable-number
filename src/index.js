module.exports = function toReadable(ary) {
    let a1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let a2 = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

    // числа от 1 до 19
    if (ary >= 0 && ary < 20) {
        return a1[ary];
    }

    // числа от 20 до 99
    if (ary >= 20 && ary < 100) {
        let k1 = Math.floor(ary / 10);
        if (ary % 10 != 0) {
            return `${a2[k1]} ${a1[ary % 10]}`;
        }
        else {
            return a2[k1];
        }
    }
    //числа от 100 до 999
    else if (ary > 99 && ary < 1000) {
        let k1 = Math.floor(ary / 100);
        let k2 = Math.floor(ary % 100 / 10);
        let k3 = ary % 10;

        if (k2 != 0 && k3 != 0) {
            if (k2 == 1) {
                return `${a1[k1]} ${a2[0]} ${a1[[k3 + 10]]}`;
            }
            else {
                return `${a1[k1]} ${a2[0]} ${a2[k2]} ${a1[k3]}`;
            };
        };
        if (k2 == 0 && k3 != 0) { return `${a1[k1]} ${a2[0]} ${a1[k3]}` };
        if (k2 != 0 && k3 == 0) { return `${a1[k1]} ${a2[0]} ${a2[k2]}` };
        if (k2 == 0 && k3 == 0) { return `${a1[k1]} ${a2[0]}` };
    }
}
