
    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });
    let json1 = require("./users.json");
    db.serialize(() => {
        db.run('create table if not exists '
            + 'users ('
            + 'id integer primary key, '
            + 'first_name text, '
            + 'last_name text, '
            + 'email text, '
            + 'gender text, '
            + 'ip_address real)');

        let stmt = db.prepare('insert into users values (?,?,?,?,?,?)');

        json1.forEach((item) => {
            stmt.run([item.id, item.first_name, item.last_name, item.email, item.gender, item.ip_address]);
        });

        stmt.finalize();

    });

    let json2 = require("./users_statistic.json");
    db.serialize(() => {
        db.run('create table if not exists '
            + 'users_statistics ('
            + 'id integer primary key, '
            + 'user_id integer, '
            + 'date text, '
            + 'page_views integer, '
            + 'clicks integer)');

        let stmt = db.prepare('insert into users_statistics values (?,?,?,?,?)');

        json2.forEach((item, index) => {      
            stmt.run([index, item.user_id, item.date, item.page_views, item.clicks]);
        });

        stmt.finalize();

    });


    // let sql = `SELECT id, user_id, date, page_views, clicks FROM users_statistics`;
    // let answer1;
    // db.all(sql, [], (err, rows) => {
    //     if (err) {
    //         throw err;
    //     }
    //     answer1 = rows;
    //     // rows.forEach((row) => {
    //     //     console.log('id: ' + row.id + ' user_id: ' + row.user_id + ' date: ' + row.date + ' clicks: ' + row.clicks);
    //     // });
    // });
    // // answer3 = answer1.map((item) => process(answer2))
    // db.close();
    // return answer1;

    module.exports = db;
