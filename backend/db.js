"use strict";
const fs = require("fs");
const pg = require("pg");

const config = {
    connectionString:
        "postgres://user:rootroot@rc1b-ijl3ozunnfgcoazs.mdb.yandexcloud.net:6432/db",
    ssl: {
        rejectUnauthorized: true,
        ca: fs
            .readFileSync("/Users/nikitapestrak/.postgresql/root.crt")
            .toString(),
    },
};

const conn = new pg.Client(config);

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

const queryBody = `SELECT * FROM bulletin`;

// const queryBody = `INSERT INTO bulletin (publishDate, publishDateString, ownerId, ownerLogin, bulletinSubject, bulletinText, bulletinImages)
// VALUES (1234567890, '2024-03-29', 1, 'john_doe', 'Новое объявление', 'Текст объявления', '{"image1.jpg", "image2.jpg"}');`

conn.connect((err) => {
    if (err) throw err;
});

// conn.query(queryBody, (err, q) => {
//     if (err) throw err;
//     console.log(q.rows)
//     conn.end();
// });

module.exports = conn;