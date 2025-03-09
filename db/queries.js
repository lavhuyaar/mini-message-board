const pool = require("./pool");

const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const getUserMessage = async (username) => {
  const {rows} = await pool.query(
    "SELECT * FROM messages WHERE username = ($1)",
    [username]
  );
  return rows;
};

const postMessage = async (username, text) => {
  await pool.query(
    'INSERT INTO messages (username, text) VALUES ($1, $2)',
    [username, text]
  );
};

module.exports = {
  getMessages,
  getUserMessage,
  postMessage,
};
