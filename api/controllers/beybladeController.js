import {
    getAllBeyblades,
    getBeybladeById,
    createBeyblade,
    updateBeyblade,
    deleteBeyblade
} from '../models/beybladeModel.js';

// Obtener todos los Beyblades
export const getAllBeybladesController = (req, res) => {
    getAllBeyblades()
        .then(beyblades => res.status(200).json(beyblades))
        .catch(error => res.status(500).send('Error al recuperar los Beyblades'));
};

// Obtener un Beyblade por ID
export const getBeybladeByIdController = (req, res) => {
    const { id } = req.params;
    getBeybladeById(id)
        .then(beyblade => {
            if (beyblade) {
                res.status(200).json(beyblade);
            } else {
                res.status(404).send('Beyblade no encontrado');
            }
        })
        .catch(error => res.status(500).send('Error al recuperar el Beyblade'));
};

// Crear un nuevo Beyblade
export const createBeybladeController = (req, res) => {
    const beybladeData = req.body;
    createBeyblade(beybladeData)
        .then(insertId => res.status(201).json(`Beyblade creado con éxito con el ID: ${insertId}`))
        .catch(error => res.status(500).send('Error al crear el Beyblade'));
};

// Actualizar un Beyblade
export const updateBeybladeController = (req, res) => {
    const { id } = req.params;
    const beybladeData = req.body;
    updateBeyblade(id, beybladeData)
        .then(result => {
            if (result.affectedRows > 0) {
                res.send(`Beyblade con el ID: ${id} actualizado con éxito.`);
            } else {
                res.status(404).send('Beyblade no encontrado');
            }
        })
        .catch(error => res.status(500).send('Error al actualizar el Beyblade'));
};

// Eliminar un Beyblade
export const deleteBeybladeController = (req, res) => {
    const { id } = req.params;
    deleteBeyblade(id)
        .then(result => {
            if (result.affectedRows > 0) {
                res.send(`Beyblade con el ID: ${id} eliminado con éxito.`);
            } else {
                res.status(404).send('Beyblade no encontrado');
            }
        })
        .catch(error => res.status(500).send('Error al eliminar el Beyblade'));
};


