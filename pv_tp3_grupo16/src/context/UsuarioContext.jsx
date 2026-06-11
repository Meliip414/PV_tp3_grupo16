import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext(null);

const usuarioInicial = {
  nombre: "Manuelita",
  dni: "48753446",
  rol: "Estudiante",
  institucion: "Facultad de Ingeniería"
};

export const UsuarioProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(() => {
    const guardado = localStorage.getItem("usuario");
    return guardado ? JSON.parse(guardado) : usuarioInicial;
  });

  const actualizarPerfil = (datos) => {
    setUsuario((prev) => ({
      ...prev,
      ...datos
    }));
  };

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};