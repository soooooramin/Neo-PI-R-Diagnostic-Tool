let valueO = 0;

const totallingO = () => {
    let valueO = 0;
    let numO = 0;
    let radioO = 0;
    let radioValueO = 0;

    for(let i=0 ; i<13; i++){
        let numO = 100 +i ;
        let radioO = document.querySelector(`input[type="radio"][name="${numO}"]:checked`)
        let radioValueO = radioO ? Number(radioO.value) : 0;
        valueO += radioValueO;
    }
    document.getElementById('scoreO').textContent = valueO;
}

const totallingN = () => {
    let valueN = 0;
    let numN = 0;
    let radioN = 0;
    let radioValueN = 0;

    for(let i=0 ; i<13; i++){
        let numN = 200 +i ;
        let radioN = document.querySelector(`input[type="radio"][name="${numN}"]:checked`)
        let radioValueN = radioN ? Number(radioN.value) : 0;
        valueN += radioValueN;
    }
    document.getElementById('scoreN').textContent = valueN;
}

const totallingE = () => {
    let valueE = 0;
    let numE = 0;
    let radioE = 0;
    let radioValueE = 0;

    for(let i=0 ; i<13; i++){
        let numE = 300 +i ;
        let radioE = document.querySelector(`input[type="radio"][name="${numE}"]:checked`)
        let radioValueE = radioE ? Number(radioE.value) : 0;
        valueE += radioValueE;
    }
    document.getElementById('scoreE').textContent = valueE;
}

const totallingA = () => {
    let valueA = 0;
    let numA = 0;
    let radioA = 0;
    let radioValueA = 0;

    for(let i=0 ; i<13; i++){
        let numA = 400 +i ;
        let radioA = document.querySelector(`input[type="radio"][name="${numA}"]:checked`)
        let radioValueA = radioA ? Number(radioA.value) : 0;
        valueA += radioValueA;
    }
    document.getElementById('scoreA').textContent = valueA;
}

const totallingC = () => {
    let valueC = 0;
    let numC = 0;
    let radioC = 0;
    let radioValueC = 0;

    for(let i=0 ; i<13; i++){
        let numC = 500 +i ;
        let radioC = document.querySelector(`input[type="radio"][name="${numC}"]:checked`)
        let radioValueC = radioC ? Number(radioC.value) : 0;
        valueC += radioValueC;
    }
    document.getElementById('scoreC').textContent = valueC;
}

const totallingAll = () => {
    totallingO();
    totallingN();
    totallingE();
    totallingA();
    totallingC();
}
  

const getResult = document.getElementById("result");
getResult.addEventListener('click',totallingAll)

