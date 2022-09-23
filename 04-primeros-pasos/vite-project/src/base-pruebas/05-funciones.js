const getUser = () => ({
  uid: "ABC567",
  username: "Vinicio",
});

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

module.exports = {
    getUser,
    getUsuarioActivo,
};