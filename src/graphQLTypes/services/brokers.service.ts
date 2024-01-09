import mysqlConnection from "../../db/dbConnection";

export const brokersList = () => {
    return new Promise((resolve, reject) => {
        mysqlConnection.connect((err: any) => {
            if (err) throw err;
            mysqlConnection.query("SELECT * FROM broker_users ORDER BY id DESC limit 100", (dbErr: any, rows: any) => {
                if (dbErr) throw dbErr;
                resolve(rows);
            });
        });
    });

};

export const brokerDetails = (id: string) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.connect((err: any) => {
            if (err) throw err;
            mysqlConnection.query(` SELECT * FROM broker_users WHERE id=${id} `, (dbErr: any, rows: any) => {
                if (dbErr) throw dbErr;
                resolve(rows[0]);
            });
        });
    });
};

export const deleteBrokerByID = (id: string) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.connect((err: any) => {
            if (err) throw err;
            mysqlConnection.query(` DELETE from broker_users WHERE id=${id} `, async (dbErr: any, rows: any) => {
                if (dbErr) throw dbErr;
                const data = await brokersList();
                resolve(data);
            });
        });
    });
};

export const addNewBrokerInDB = (args: any) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.connect((err: any) => {
            if (err) throw err;
            mysqlConnection.query(` INSERT INTO broker_users(title,first_name,last_name) VALUES('${args.title}','${args.firstName}','${args.lastName}')`, (dbErr: any, rows: any) => {
                if (dbErr) throw dbErr;
                mysqlConnection.query(`SELECT * from broker_users ORDER BY id DESC LIMIT 1`, (selectErr: any, resp: any) => {
                    resolve(resp[0]);
                });
            });
        });
    });
};


export const updateBrokerInDB = (args: any) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.connect((err: any) => {
            if (err) throw err;
            mysqlConnection.query(` UPDATE broker_users SET title='${args.broker.title}',first_name='${args.broker.firstName}',last_name='${args.broker.lastName}' WHERE id=${args.id}`, async (dbErr: any, rows: any) => {
                if (dbErr) throw dbErr;
                const data = await brokerDetails(args.id);
                resolve(data);
            });
        });
    });
};