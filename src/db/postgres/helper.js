import pg from 'pg';

const {Pool} = pg;

export const pool = new Pool({
    user:'guilherme',
    password:'321654',
    port:5435,
    database:'desafio'
});


export const PostgresHelper = {
    query: async (query, params) => {
        const client = await pool.connect();

        const results = await client.query(query, params);

        await client.release();

        return results.rows;
    }
}
