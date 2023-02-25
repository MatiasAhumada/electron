const urlProductos = process.env.APP_API_LOCAL_PRODUCTOS
// process.env.REACT_APP_API_TECNO_MAS_PRODUCTOS
// const urlUsuario =process.env.REACT_APP_API_TECNO_MAS_USUARIOS
// const urlpedidos = process.env.REACT_APP_API_TECNO_MAS_PEDIDOS
// PRODUCTOS
 const crearProductoApi = async (producto) => {
    try {
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
   const borrarProductoAPI = async (id) => {
    try {
      const respuesta = await fetch( `${URL}/${id}` , {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
   const obtenerProductoApi = async (id) => {
    try {
      const respuesta = await fetch(`${URL}/${id}`);
      const productoBuscado = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
  
      return productoBuscado;
    } catch (error) {
      console.log(error);
    }
  };
  
   const editarProductoApi = async (id, datosActualizados) => {
    try {
      const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
   const consultarProductoApi = async () => {
  
    try {
      const respuesta = await fetch(URL);
  
      const listaProductos = await respuesta.json();
  
      return listaProductos;
    } catch (error) {
      console.log(error);
    }
  };
 
  // USUARIOS
 const usuarioLogin = async (usuario) => {
    try {
      const respuesta = await fetch(urlUsuario);
      const listaUsuario = await respuesta.json();
  
      const usuarioBuscado = listaUsuario.find(
        (itemUsuario) => itemUsuario.email === usuario.email
      );
      if (usuarioBuscado) {
        
        if (usuarioBuscado.password === usuario.password) {
          return usuarioBuscado;
        } else {
          return;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
   const obtenerUsuarioApi = async (id) => {
    try {
      const respuesta = await fetch(`${urlUsuario}/${id}`);
      const usuarioBuscado = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
    
      return usuarioBuscado;
    } catch (error) {
      console.log(error);
    }
  };
   const crearUsuario = async (usuario) => {
    try {
      const respuesta = await fetch(urlUsuario, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return;
    }
  };
   const borrarUsuarioAPI = async (id) => {
    try {
      const respuesta = await fetch(`${urlUsuario}/${id}`, {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
   const editarUsuarioApi = async (id, datosActualizados) => {
    try {
  
      const respuestaUsuario = await fetch(`${urlUsuario}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
    
      return respuestaUsuario;
    } catch (error) {
      console.log(error);
    }
  };
   const consultarUsuarioApi = async () => {
    try {
      const respuesta = await fetch(urlUsuario);
  
      const listaUsuarios = await respuesta.json();
    
      return listaUsuarios;
    } catch (error) {
      console.log(error);
    }
  };
  // PEDIDOS

 const consultarPedidosAPI = async () => {
  try {
    const respuesta = await fetch(URLpedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

 const crearPedidoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URLpedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

 const borrarPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLpedidos}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

 const obtenerPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLpedidos}/${id}`);
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

 const editarPedidoAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${URLpedidos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// pedidos pendiente

 const listaPedidosPendientesAPI = async () => {
  try {
    const respuesta = await fetch(`${URLpedidos} pendiente`);
    const pedidosPendientes = await respuesta.json();
    return pedidosPendientes;
  } catch (error) {
    console.log(error);
  }
};

// pedidos en elaboracion

 const listaPedidosProcesandoAPI = async () => {
  try {
    const respuesta = await fetch(`${URLpedidos} procesando`);
    const pedidosElaboracion = await respuesta.json();
    return pedidosElaboracion;
  } catch (error) {
    console.log(error);
  }
};

// pedidos listos

 const listaPedidosListosAPI = async () => {
  try {
    const respuesta = await fetch(`${URLpedidos} listos`);
    const pedidosListos = await respuesta.json();
    return pedidosListos;
  } catch (error) {
    console.log(error);
  }
};

// pedidos cancelados

 const listaPedidosCanceladosAPI = async () => {
  try {
    const respuesta = await fetch(`${URLpedidos} cancelados`);
    const pedidosCancelados = await respuesta.json();
    return pedidosCancelados;
  } catch (error) {
    console.log(error);
  }
};