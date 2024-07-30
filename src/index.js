module.exports = function toReadable(number) {
        let first;
        let second;
        let third;
        numberstring = number.toString();
        let len = number.toString().length;
        if (len == 1) {
            switch (number) {
                case 0:
                    return 'zero';
                    break;
                case 1:
                    return 'one';
                    break;
                case 2:
                    return 'two';
                    break;
                case 3:
                    return 'three';
                    break;
                case 4:
                    return 'four';
                    break;
                case 5:
                    return 'five';
                    break;
                case 6:
                    return 'six';
                    break;
                case 7:
                    return 'seven';
                    break;
                case 8:
                    return 'eight';
                    break;
                case 9:
                    return 'nine';
                    break;
            }
        } else if ((len == 2) && (numberstring[0] == '1')) {
            switch (numberstring[1]) {
                case '0':
                    return 'ten';
                    break;
                case '1':
                    return 'eleven';
                    break;
                case '2':
                    return 'twelve';
                    break;
                case '3':
                    return 'thirteen';
                    break;
                case '4':
                    return 'fourteen';
                    break;
                case '5':
                    return 'fifteen';
                    break;
                case '6':
                    return 'sixteen';
                    break;
                case '7':
                    return 'seventeen';
                    break;
                case '8':
                    return 'eighteen';
                    break;
                case '9':
                    return 'nineteen';
                    break;
            }
        } else if ((len == 2) && (numberstring[0] != '1')) {
            switch (numberstring[0]) {
                case '2':
                    second = 'twenty';
                    break;
                case '3':
                    second = 'thirty';
                    break;
                case '4':
                    second = 'forty';
                    break;
                case '5':
                    second = 'fifty';
                    break;
                case '6':
                    second = 'sixty';
                    break;
                case '7':
                    second = 'seventy';
                    break;
                case '8':
                    second = 'eighty';
                    break;
                case '9':
                    second = 'ninety';
                    break;
            };
            switch (numberstring[1]) {
                case '0':
                    third = '';
                    break;
                case '1':
                    third = ' one';
                    break;
                case '2':
                    third = ' two';
                    break;
                case '3':
                    third = ' three';
                    break;
                case '4':
                    third = ' four';
                    break;
                case '5':
                    third = ' five';
                    break;
                case '6':
                    third = ' six';
                    break;
                case '7':
                    third = ' seven';
                    break;
                case '8':
                    third = ' eight';
                    break;
                case '9':
                    third = ' nine';
                    break;
            };
            return (second + third);
        } else if ((len == 3) && (numberstring[1] != '1')) {
            switch (numberstring[0]) {
                case '1':
                    first = 'one hundred';
                    break;
                case '2':
                    first = 'two hundred';
                    break;
                case '3':
                    first = 'three hundred';
                    break;
                case '4':
                    first = 'four hundred';
                    break;
                case '5':
                    first = 'five hundred';
                    break;
                case '6':
                    first = 'six hundred';
                    break;
                case '7':
                    first = 'seven hundred';
                    break;
                case '8':
                    first = 'eight hundred';
                    break;
                case '9':
                    first = 'nine hundred';
                    break;
            };
            switch (numberstring[1]) {
                case '0':
                    second = '';
                    break;
                case '2':
                    second = ' twenty';
                    break;
                case '3':
                    second = ' thirty';
                    break;
                case '4':
                    second = ' forty';
                    break;
                case '5':
                    second = ' fifty';
                    break;
                case '6':
                    second = ' sixty';
                    break;
                case '7':
                    second = ' seventy';
                    break;
                case '8':
                    second = ' eighty';
                    break;
                case '9':
                    second = ' ninety';
                    break;
            };
            switch (numberstring[2]) {
                case '0':
                    third = '';
                    break;
                case '1':
                    third = ' one';
                    break;
                case '2':
                    third = ' two';
                    break;
                case '3':
                    third = ' three';
                    break;
                case '4':
                    third = ' four';
                    break;
                case '5':
                    third = ' five';
                    break;
                case '6':
                    third = ' six';
                    break;
                case '7':
                    third = ' seven';
                    break;
                case '8':
                    third = ' eight';
                    break;
                case '9':
                    third = ' nine';
                    break;
            };
            return (first + second + third);
        } else if ((len == 3) && (numberstring[1] == '1')) {
            switch (numberstring[0]) {
                case '1':
                    first = 'one hundred';
                    break;
                case '2':
                    first = 'two hundred';
                    break;
                case '3':
                    first = 'three hundred';
                    break;
                case '4':
                    first = 'four hundred';
                    break;
                case '5':
                    first = 'five hundred';
                    break;
                case '6':
                    first = 'six hundred';
                    break;
                case '7':
                    first = 'seven hundred';
                    break;
                case '8':
                    first = 'eight hundred';
                    break;
                case '9':
                    first = 'nine hundred';
                    break;
            };
            switch (numberstring[2]) {
                case '0':
                    second = ' ten';
                    break;
                case '1':
                    second = ' eleven';
                    break;
                case '2':
                    second = ' twelve';
                    break;
                case '3':
                    second = ' thirteen';
                    break;
                case '4':
                    second = ' fourteen';
                    break;
                case '5':
                    second = ' fifteen';
                    break;
                case '6':
                    second = ' sixteen';
                    break;
                case '7':
                    second = ' seventeen';
                    break;
                case '8':
                    second = ' eighteen';
                    break;
                case '9':
                    second = ' nineteen';
                    break;
            };
            return (first + second);
        }
}
