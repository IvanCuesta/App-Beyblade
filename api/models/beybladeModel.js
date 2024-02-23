import connection from '../db.js';

const getAllBeyblades = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM beyblades';
        connection.query(query, (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const getBeybladeById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM beyblades WHERE id = ?';
        connection.query(query, [id], (error, results) => {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

const createBeyblade = (beyblade) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO beyblades SET ?';
        connection.query(query, beyblade, (error, results) => {
            if (error) reject(error);
            resolve(results.insertId);
        });
    });
};

const updateBeyblade = (id, beyblade) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE beyblades SET ? WHERE id = ?';
        connection.query(query, [beyblade, id], (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const deleteBeyblade = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM beyblades WHERE id = ?';
        connection.query(query, [id], (error, results) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

export { getAllBeyblades, getBeybladeById, createBeyblade, updateBeyblade, deleteBeyblade };
