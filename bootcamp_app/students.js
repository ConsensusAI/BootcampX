const { Pool } = require("pg");
const args = process.argv.slice(2);

let cohort = args[0];
let limit = args[1];

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

pool
  .query(
    `
SELECT students.id, students.name AS name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit};`
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`
      );
    });
  })
  .catch((err) => console.log("query error", err.stack));
