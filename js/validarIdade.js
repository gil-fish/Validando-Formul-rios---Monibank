export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}

//a variável dataAtual receberá a data do momento atual em que estamos;
//a variável dataMais18 que receberá os parâmetros de ano, mês e dia da data de nascimento inserida no campo e adicionará a ela uo número 18.
// return verificará se data atual é maior ou igual a dataMais18, confirmando que a pessoa usuária já completou 18 anos.