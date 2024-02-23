document.addEventListener('DOMContentLoaded', function () {
    loadBeyblades();

    const form = document.getElementById('beybladeForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const beybladeId = document.getElementById('beybladeId').value;
        if (beybladeId) {
            updateBeyblade(beybladeId);
        } else {
            createBeyblade();
        }
    });
});

const url = 'http://localhost:3000/beyblades';

function loadBeyblades() {
    fetch(url)
        .then(response => response.json())
        .then(beyblades => {
            const tableBody = document.getElementById('beybladesTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Limpiar la tabla antes de cargar nuevos datos
            beyblades.forEach(beyblade => {
                let row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${beyblade.id}</td>
                    <td>${beyblade.nombre}</td>
                    <td>${beyblade.tipo}</td>
                    <td>${beyblade.pana}</td>
                    <td>
                        <button onclick="editBeyblade(${beyblade.id})">Editar</button>
                        <button onclick="deleteBeyblade(${beyblade.id})">Eliminar</button>
                    </td>
                `;
            });
        })
        .catch(error => console.error('Error al cargar los Beyblades:', error));
}

function createBeyblade() {
    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const pana = document.getElementById('pana').value;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, tipo, pana }),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error al crear el Beyblade');
    })
    .then(() => {
        clearForm();
        loadBeyblades();
    })
    .catch(error => console.error('Error:', error));
}

function updateBeyblade(id) {
    const nombre = document.getElementById('nombre').value;
    const tipo = document.getElementById('tipo').value;
    const pana = document.getElementById('pana').value;

    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, tipo, pana }),
    })
    .then(response => {
        if (response.ok) {
            clearForm();
            loadBeyblades();
        } else {
            throw new Error('Error al actualizar el Beyblade');
        }
    })
    .catch(error => console.error('Error:', error));
}

function deleteBeyblade(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este Beyblade?')) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                loadBeyblades();
            } else {
                throw new Error('Error al eliminar el Beyblade');
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function editBeyblade(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(beyblade => {
            document.getElementById('beybladeId').value = beyblade.id;
            document.getElementById('nombre').value = beyblade.nombre;
            document.getElementById('tipo').value = beyblade.tipo;
            document.getElementById('pana').value = beyblade.pana;
        })
        .catch(error => console.error('Error al cargar el Beyblade:', error));
}

function clearForm() {
    document.getElementById('beybladeId').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('pana').value = '';
}
