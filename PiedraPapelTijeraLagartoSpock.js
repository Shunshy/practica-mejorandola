//Genera numero aleatorio entre un rango de enteros
function aleatoria(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var Piedra = 0;
var Papel = 1;
var Tijera = 2;
var Lagarto = 3;
var Spock = 4;

var opciones=["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var OpcionUsuario;
var OpcionMaquina= aleatoria(0,4);

OpcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

alert("Elegiste" + opciones[OpcionUsuario]);
alert("Javascript Eligió" + opciones[OpcionMaquina]);

if (OpcionUsuario==Piedra)
{
if (OpcionMaquina==Piedra)
	{
		alert("Empate!");
	}
	else if (OpcionMaquina==Papel)
	{
		alert("Perdiste T.T");
	}
	else if(OpcionMaquina==Tijera)
	{
		alert("Ganaste :D");
	}
	else if(OpcionMaquina==Lagarto)
	{
		alert("Ganaste :D");
	}
	else if (OpcionMaquina==Spock)
	{
		alert("Perdiste T.T");
	}	
}

else if (OpcionUsuario==Papel) 
{
if (OpcionMaquina==Piedra)
	{
		alert("Ganaste :D");
	}
	else if (OpcionMaquina==Papel)
	{
		alert("Empate!");
	}
	else if(OpcionMaquina==Tijera)
	{
		alert("Perdiste T.T");
	}
	else if(OpcionMaquina==Lagarto)
	{
		alert("Perdiste T.T");
	}
	else if (OpcionMaquina==Spock)
	{
		alert("Ganaste :D");
	}	
}
else if (OpcionUsuario==Tijera)
{
if (OpcionMaquina==Piedra)
	{
		alert("Perdiste T.T");
	}
	else if (OpcionMaquina==Papel)
	{
		alert("Ganaste :D");
	}
	else if(OpcionMaquina==Tijera)
	{
		alert("Empate!");
	}
	else if(OpcionMaquina==Lagarto)
	{
		alert("Ganaste :D");
	}
	else if (OpcionMaquina==Spock)
	{
		alert("Perdiste T.T");
	}	
}
else if(OpcionUsuario==Lagarto)
{
if (OpcionMaquina==Piedra)
	{
		alert("Perdiste T.T");
	}
	else if (OpcionMaquina==Papel)
	{
		alert("Ganaste :D");
	}
	else if(OpcionMaquina==Tijera)
	{
		alert("Perdiste T.T");
	}
	else if(OpcionMaquina==Lagarto)
	{
		alert("Empate!");
	}
	else if (OpcionMaquina==Spock)
	{
		alert("Ganaste :D");
	}	
}
else if(OpcionUsuario==Spock)
{
if (OpcionMaquina==Piedra)
	{
		alert("Ganaste :D");
	}
	else if (OpcionMaquina==Papel)
	{
		alert("Perdiste T.T");
	}
	else if(OpcionMaquina==Tijera)
	{
		alert("Ganaste :D");
	}
	else if(OpcionMaquina==Lagarto)
	{
		alert("Perdiste T.T");
	}
	else if (OpcionMaquina==Spock)
	{
		alert("Empate!");
	}		
}

else
{
	alert("Te  equivocaste ^.^")
}