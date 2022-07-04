//Local storage 
//session storage
//function arrows
//let value = document.getElementById("tuIdDelInput").value
//value = 0


/* *************************  Global Variables  ************************* */ 

let usuario;
let control;

let cuentas = 
[ 
    {
        id: 0, 
        nombre: "mali", 
        password: ' ', 
        saldo: 200, 
    }, 

    {
        id: 1, 
        nombre: "Gera",  
        password: 'l33t',
        saldo: 290,
    }, 

    { 
        id: 2,
        nombre: "Maui", 
        password: '123',
        saldo: 67,
    }, 
];

/* ************************* Functions  ************************* */ 

function loginAccess()
{

//Variable Local 
let userName;
let userPassword;

userName = document.querySelector('#user').value;
userPassword = document.querySelector('#password').value;

usuario = cuentas.find(function buscar(user)
{
    return userName === user.nombre
})

console.log(usuario);

if (usuario) //tiene una coincidencia (true) //si no tiene es indefinido
{
    if(userPassword === usuario.password)
    {
        console.log("SOLO PRUEBA ver que el usuario si entre");
        menu();

    }
    else
    {
        alert("usuario o contraseña no valido");
    }
}
else
{
    alert("usuario o contraseña no valido");
}
}

function invisible(variable)
{
    control = document.getElementById(variable)
    control.classList.remove('visible');
    control.classList.add('invisible');
}

function visible(variable)
{
    control = document.getElementById(variable);
    control.classList.remove('invisible');
    control.classList.add('visible');
}


function menu()
{
    //Volvevemos invisible el login
    invisible('access_credentials');
    
    //Volvemos visible el menu de botones
    visible('nav_menu');

    visible('exit_menu_container');

}

function checkBalance()
{
    //Control de visibilidad
    invisible('btn_deposit_container');
    invisible('btn_withdraw_container');
    invisible('btn_check_balance');
    visible('return_menu_container');
    
    visible('view_balance');
    let view_balance = document.getElementById('view_balance').innerHTML = `Su saldo actual en la cuenta es de: <b>$${usuario.saldo}</b>`;

}

function deposit()
{
    invisible('btn_check_balance_container');
    invisible('btn_deposit');
    invisible('btn_withdraw_container');
    visible('deposit_number');

    visible('return_menu_container');

}

function confirmDeposit()
{
    let deposito = Number(document.getElementById('deposit').value);
    usuario.saldo += deposito;
    invisible('deposit_number');
    visible('viewDeposit')
    let viewDeposit = document.getElementById('viewDeposit').innerHTML = `El nuevo saldo en la cuenta es: <b>$${usuario.saldo}</b>`

}


function withdraw()
{

    invisible('btn_check_balance_container');
    invisible('btn_deposit_container');

    invisible('btn_withdraw');
    visible('withdraw_number');

    visible('return_menu_container');

    let viewActualBalance = document.getElementById('viewActualBalance').innerHTML = `Su saldo actual en la cuenta es de: <b>$${usuario.saldo}</b>`;

    viewActualBalance(usuario.saldo);

}

function confirmWithdraw()
{
    invisible('withdraw_number');
    let amount = Number(document.getElementById('withdraw').value);

    if(usuario.saldo < amount)
    {
        alert('La cantidad ingresa no esta disponible');
        withdraw();
    }
    else
    {
        usuario.saldo -= amount;
        console.log("🚀 ~ file: app.js ~ line 166 ~ usuario.saldo", usuario.saldo)
        
        visible('viewWithdraw')
        let viewWithdraw = document.getElementById('viewWithdraw').innerHTML  = `Su saldo actual en la cuenta es de: <b>$${usuario.saldo}</b>`;
    }
}

function returnMenu()
{

    //Check Balance
    visible('btn_check_balance_container')
    visible('btn_check_balance');
    invisible('view_balance');

    //Deposit
    visible('btn_deposit_container');
    visible('btn_deposit');
    invisible('deposit_number');
    invisible('viewDeposit');

    //withdraw
    visible('btn_withdraw_container');
    visible('btn_withdraw');
    invisible('viewWithdraw');
    invisible('withdraw_number')

    //button return
    invisible('return_menu_container');
    
}

function exitMenu()
{
    visible('access_credentials');
    invisible('nav_menu');
    invisible('exit_menu_container');
}