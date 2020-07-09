// importar a dependecia do sqlite3
const sqlite3 = require("sqlite3").verbose()
// método é uma função dentro de um objeto
//  verbose é um metodo que configura o sqlite3

//  criar o obj do banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// exportar arquivo
module.exports = db

db.serialize(() => {
    // 1. criar tabela
    // db.run(`
    //  CREATE TABLE IF NOT EXISTS places (
    //      id INTEGER PRIMARY KEY AUTOINCREMENT,
    //      image TEXT,
    //      name TEXT,
    //      address TEXT,
    //      address2 TEXT,
    //      state TEXT,
    //      city TEXT,
    //      items TEXT
    //  );
    // `)

    // 2. inserir dados na tabela
    // const query = `
    //     INSERT INTO places(
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    //     `
    // const values =  [        
    //     "/assets/bottlerecycle.jpeg",
    //     "Recicloteca",
    //     "Bangu, Rua Roque Barbosa",
    //     "Número 438",
    //     "RJ",
    //     "Rio de Janeiro",
    //     "Garrafas pet, Vidros e Tampinhas"
    // ]     

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //         // se houver erro ele será retornado no console.log
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // 3. consultar dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //      if(err) {
    //          return console.log(err)
    //      }
    //      console.log("Aqui estão os seus registros: ")
    //      console.log(rows)

    // })

    // 4. deletar dados da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })
})