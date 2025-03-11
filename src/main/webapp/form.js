/**
 * 
 
*/

let usuarios = [];
let id = 1;

function agregarUsuario() {

	const nombre = document.getElementById("nombreUsuario").value;

	let fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);

	const fechaActual = new Date();
	if (fechaActual < fechaNacimiento) {
		alert("La fecha es incorrecta");
		return false;
	}
	const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
	if (!usuarios.some(usuario => usuario[1] === nombre)) {
		const fila = document.createElement("tr");
		fila.innerHTML = `
		           <td>${id}</td>
		           <td>${nombre}</td>
		           <td>${edad}</td>`;
		usuarios.push([id, nombre, edad]);
		id++;
		document.getElementById("tabla").appendChild(fila);
	} else {
		alert("El usuario ya existe");
		return false;
	}
	return false;
}


function eliminarUsuario() {

	let idUsuarioABorrar = prompt("Introduzca el id del usuario a borrar",0);
	
	 usuarios.forEach(usuario => (usuario[0] ==idUsuarioABorrar))

 		
 }


