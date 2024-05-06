"use strict";
const fs = require("fs");
const pg = require("pg");

// Изначально реализовал БД через кластер Яндекс Cloud, но удалил его после просмотра тестового
// тк он кушал деньги. Теперь создал небольшую бд в файле bulletinsDataBase.js
// Этот файл решил просто закомментировать

// const config = {
//     connectionString:
//         "postgres://user:rootroot@rc1b-ijl3ozunnfgcoazs.mdb.yandexcloud.net:6432/db",
//     ssl: {
//         rejectUnauthorized: true,
//         ca: fs
//             .readFileSync("/Users/nikitapestrak/.postgresql/root.crt")
//             .toString(),
//     },
// };
//
// const conn = new pg.Client(config);

// const queryBody = `CREATE TABLE bulletin(
//     id SERIAL PRIMARY KEY,
//     publishDate INT,
//     publishDateString VARCHAR(255),
//     ownerId INT,
//     ownerLogin VARCHAR(255),
//     bulletinSubject VARCHAR(255),
//     bulletinText TEXT,
//     bulletinImages TEXT[]
// );`

// const queryBody = `SELECT * FROM bulletin LIMIT 10`;

// const queryBody = `INSERT INTO bulletin ("id", "publishDate", "publishDateString", "ownerId", "ownerLogin", "bulletinSubject", "bulletinText", "bulletinImages")
// VALUES (11, 1234567890, '20:21, сегодня', 5, 'YoYoYo', 'Делем мебел под заказ', 'Это очень крутое объявление', '{"https://static.baza.farpost.ru/v/1510541224458_hugeBlock", "https://static.baza.farpost.ru/v/1510541224458_hugeBlock"}');`

// conn.connect((err) => {
//     if (err) throw err;
// });

// conn.query(queryBody, (err, q) => {
//     if (err) throw err;
//     console.log(q.rows)
//     conn.end();
// });

// module.exports = conn;