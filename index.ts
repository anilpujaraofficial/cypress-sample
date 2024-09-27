require("dotenv").config(); // Load .env file

function add() {
  let data = {
    community_id: parseInt(process.env.AGENT_ID),
    scheme_id: process.env.SCHEME_ID,
  };
  return { data: data };
}

console.log(add().data);
