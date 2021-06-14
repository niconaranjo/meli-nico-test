const AUTOR = {
  NAME: 'Nicolas',
  LAST_NAME: 'Naranjo',
};

exports.buildAutorName = (name = '', lastname = '') => {
  return {
    name: name !== '' ? name : AUTOR.NAME,
    lastname: lastname !== '' ? lastname : AUTOR.LAST_NAME,
  };
};
