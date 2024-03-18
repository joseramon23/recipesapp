import express from 'express';
import cors from 'cors';
import { createPool } from 'mysql2/promise';

const app = express();

app.use(cors());

const pool = createPool({
  host: 'mysqldb',
  user: 'admin',
  password: '123456',
  database: 'recipesdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/database", async (req, res) => {
    try {
        const [results, fields] = await pool.query('SELECT 1');
        res.json({ success: true, message: 'Conexión a MySQL exitosa' });
        console.log(results)
    } catch (err) {
        console.error('Error al conectar a MySQL:', err);
        res.status(500).json({ success: false, message: 'Error al conectar a MySQL' });
        console.log(err)
    }
});

app.get("/hola", async (req, res) => {
    res.json({
        saludo: "Hola mundo",
        action: "true"
    })
})

app.listen(3000);
console.log("Servidor en puerto", 3000);