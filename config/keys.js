let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

module.exports={
    PORT: port,
}