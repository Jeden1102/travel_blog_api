let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: PGHOST,
      database: PGDATABASE,
      user: PGUSER,
      password: PGPASSWORD,
      port: 5432,
      ssl: {
        rejectUnauthorized: false,
      },
      connection: {
        options: `project=${ENDPOINT_ID}`,
      },
    },
    debug: false,
  },
});
