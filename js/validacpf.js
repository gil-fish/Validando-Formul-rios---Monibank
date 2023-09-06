export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é válido');
    }
}

//configurar a validação de números repetidos
function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 10; tamanho < 9; tamanho++) {
        soma + -cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma + -cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[10];
}

//Quando importamos o arquivo script.js dentro do HTML definimos o tipo module pois as validações seriam separadas em arquivos diferentes e se encontrariam no script.

//A função ehUmCPF foi configurada para ser exportada como padrão, ou seja, quando chamarmos o arquivo valida-cpf esta função será retornada. Criamos também uma função tradicional que receberá o valor de campo com o método replace, que por sua vez recebe dois parâmetros: o primeiro indica o conteúdo que queremos substituir (no caso, os caracteres especiais . e -), enquanto o segundo indica o conteúdo que será utilizado para substituí-lo (no caso, um campo vazio). Através desta função, efetuamos a remoção dos caracteres especiais nos casos de inputs com essa característica, normalizando esses valores e tornando mais fácil a comparação e validação entre os tipos de CPF inseridos.

//Na função validaPrimeiroDigito, o laço de repetição for possuirá a variável let tamanho = 0, a qual determinaremos que deve se repetir nove vezes (para os 9 primeiros dígitos do CPF) através do comando tamanho < 9; tamanho++. Em seguida adicionaremos no interior das chaves deste for a variável soma que declaramos anteriormente e que agora deverá recolher os valores do CPF de acordo com cada posição do for. Em seguida vamos multiplicá-lo pelo valor de multiplicador. Na linha de baixo adicionaremos o comando multiplicador-- que completará o loop duplo no qual o CPF aumenta a posição do tamanho enquanto o multiplicador a diminui.