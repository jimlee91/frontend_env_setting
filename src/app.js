import axios from "axios";

import "./app.css";
import icon from "./images/icon.png";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);

  document.body.innerHTML = (res.data || [])
    .map((user, index) => {
      return `<div>${user.id}: ${user.name}</div>`;
    })
    .join("");
});

console.log(process.env.NODE_ENV);
