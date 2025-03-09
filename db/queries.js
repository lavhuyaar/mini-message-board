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

const postMessage = async (username, text, added) => {
  await pool.query(
    'INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)',
    [username, text, added]
  );
};

module.exports = {
  getMessages,
  getUserMessage,
  postMessage,
};
