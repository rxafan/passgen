    function passgen() {

        var cap_input = document.querySelector('[name="cap"]');
        var low_input = document.querySelector('[name="low"]');
        var num_input = document.querySelector('[name="num"]');
        var spec_input = document.querySelector('[name="spec"]');

        var numchar = document.querySelector('.numchar');
            numchar = (+numchar.value < 1) ? 15 : +numchar.value;

            if(numchar > 999){
                alert('Максимальная длина пароля 999');
                return false;
            }

        var cap = cap_input.checked ? ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] : [];
        var low = low_input.checked ? ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] : [];
        var num = num_input.checked ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] : [];
        var spec = spec_input.checked ? ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", "|", ";", ":", '"', "'", ",", "<", ">", ".", "/", "?"] : [];

        var passgen_div = document.querySelector('.passgen');

        var rezult = cap.concat(low,num,spec);

        var genpass = [];

        if(rezult.length == 0){
            alert('Нужно указать символы для пароля');
            return false;
        }

        for (var i = 0; i < numchar; i++) {
                genpass.push(rezult[Math.floor(Math.random() * rezult.length)]);
        }

        passgen_div.value = genpass.join('');

    }