import mssql from 'mssql';

const dbSettings = {
    server:"",
    database:"",
    user: "",
    password: "",
    oprtions: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection(){
    try{
        return await mssql.connect(dbSettings)
    }
    catch(error){
        console.error(error);
    }
}
export {mssql};