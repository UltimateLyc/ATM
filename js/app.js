//Local storage 
//session storage

/*

Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.

Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:

    Consultar saldo
    Ingresar monto
    Retirar monto

    Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
    Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
    Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.


 */

//Variables globales

let usuario;

let cuentas = 
[ 
    {
        id: 0, 
        nombre: "mali", 
        password: 'helloworld', 
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

//Funciones

function loginAccess()
{

//Variable Local 
let userName;
let userPassword;

userName = document.querySelector('#user').value;
//console.log("🚀 ~ file: app.js ~ line 56 ~ validateUser", userName);
userPassword = document.querySelector('#password').value;
//console.log("🚀 ~ file: app.js ~ line 59 ~ validatePassword", userPassword);

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

let control;

function menu()
{
    control = document.getElementById('access_credentials');
    control.classList.remove('visible');
    control.classList.add('invisible');

    control = document.getElementById('nav_menu');
    control.classList.remove('invisible');
    control.classList.add('visible');

    control = document.getElementById('exit_container');
    control.classList.remove('invisible');
    control.classList.add('visible');

}

function checkBalance()
{
    console.log(usuario.saldo)
}

function deposit()
{
    console.log(usuario.saldo)
    let test = Number(prompt('Ingrese la cantidad a ingresar'))
    usuario.saldo += test
    console.log(usuario.saldo)
}


function withdraw()
{
    console.log(usuario.saldo)
    let test_2 = Number(prompt('Ingrese la cantidad a retirar'))
    usuario.saldo -= test_2
    console.log(usuario.saldo)
}



