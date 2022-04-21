function contar () { 
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')// boto aqui as identidades do que eu quero pegar 

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível contar!'
} else{
    res.innerHTML= 'Contando: '
    let i =Number(ini.value)// aqui eu to convertendo pra numero o que o usuario botou na caixinha  
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p<=0){
        window.alert('Passo inválido!')
    }
    if (i < f){ // o for só funciona se o valor do inicio for menor que o valor do fim 
        //contagem crescente
    for(let c= i; c <= f; c +=p){//o contador vai começar no inicio, enquanto o contador for menor ou igual ao fim -> o contador vai receber ele mesmo + o passo 
        res.innerHTML += `${c} \u{1F449}`// aqui como colocar emoji copiei o codigo e troquei U+1F449 
    }
} else {// se não 
    //contagem regressiva
    for(let c = i; c >= f; c -= p ){
        res.innerHTML += `\u{1F449}`
    }// o c começando no inicio que é um numero maior, enquanto c for maior ou igual a f, o meu contador vai perder o passo 

}
}
}