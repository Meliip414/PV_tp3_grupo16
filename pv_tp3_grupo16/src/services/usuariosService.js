const usuariosService = (() => {
const usuarios= [
        {dni: '48144965',nombre: 'Manuelita', password:'1234', rol: 'alumno', institucion:'Escuela de Minas'}
    ];

    const login = (dni, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const encontrado = usuarios.find(
                    u => u.dni === dni && u.password === password
                );
                if (encontrado) {
                    resolve({ dni: encontrado.dni, nombre: encontrado.nombre , rol:encontrado.rol, institucion:encontrado.institucion});
                } else {
                    reject(new Error('Usuario o contraseña incorrectos'));
                }
            }, 800);
        });
    };
  return { login };

})();

export default usuariosService;