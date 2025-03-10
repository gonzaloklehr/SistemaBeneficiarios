import { create } from "zustand"

export const useSolicitudesStore = create((set, get) => ({
  solicitudes: [],
  solicitudActual: null,
  isLoading: false,
  error: null,

  // Obtener todas las solicitudes
  fetchSolicitudes: async () => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.get('/api/solicitudes')

      // Simulamos datos para el maquetado
      const mockSolicitudes = [
        {
          id: "1234",
          tipo: "Compensación",
          beneficiario: {
            id: 1,
            nombre: "Juan Díaz",
            avatar: "/placeholder.svg?height=32&width=32",
            iniciales: "JD",
          },
          area: "Compensaciones",
          estado: "En proceso",
          fechaCreacion: "12/03/2024",
          fechaActualizacion: "14/03/2024",
        },
        {
          id: "1233",
          tipo: "Habilitación",
          beneficiario: {
            id: 2,
            nombre: "María Rodríguez",
            avatar: "/placeholder.svg?height=32&width=32",
            iniciales: "MR",
          },
          area: "DGCOPE",
          estado: "Aprobada",
          fechaCreacion: "10/03/2024",
          fechaActualizacion: "13/03/2024",
        },
        {
          id: "1232",
          tipo: "Fiscalización",
          beneficiario: {
            id: 3,
            nombre: "Pedro Gómez",
            avatar: "/placeholder.svg?height=32&width=32",
            iniciales: "PG",
          },
          area: "Fiscalizadores Lavalle",
          estado: "Rechazada",
          fechaCreacion: "08/03/2024",
          fechaActualizacion: "11/03/2024",
        },
        {
          id: "1231",
          tipo: "Certificación",
          beneficiario: {
            id: 4,
            nombre: "Laura Fernández",
            avatar: "/placeholder.svg?height=32&width=32",
            iniciales: "LF",
          },
          area: "Bomberos",
          estado: "En revisión",
          fechaCreacion: "05/03/2024",
          fechaActualizacion: "09/03/2024",
        },
        {
          id: "1230",
          tipo: "Habilitación",
          beneficiario: {
            id: 1,
            nombre: "Juan Díaz",
            avatar: "/placeholder.svg?height=32&width=32",
            iniciales: "JD",
          },
          area: "Compensaciones",
          estado: "Pendiente",
          fechaCreacion: "03/03/2024",
          fechaActualizacion: "07/03/2024",
        },
      ]

      set({ solicitudes: mockSolicitudes, isLoading: false })
      return mockSolicitudes
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al obtener solicitudes",
        isLoading: false,
      })
      throw error
    }
  },

  // Obtener una solicitud por ID
  fetchSolicitudById: async (id) => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.get(`/api/solicitudes/${id}`)

      // Simulamos datos para el maquetado
      const mockSolicitud = {
        id,
        tipo: "Compensación",
        beneficiario: {
          id: 1,
          nombre: "Juan Díaz",
          dni: "28.456.789",
          email: "juan.diaz@ejemplo.com",
          telefono: "+54 11 4567-8901",
          direccion: "Av. Rivadavia 1234, CABA",
          avatar: "/placeholder.svg?height=80&width=80",
          iniciales: "JD",
          solicitudesActivas: 2,
        },
        area: "Compensaciones",
        estado: "En proceso",
        fechaCreacion: "12/03/2024",
        fechaActualizacion: "14/03/2024",
        prioridad: "Media",
        tiempoEstimado: "5 días hábiles",
        descripcion:
          "Solicitud de compensación por daños ocasionados durante el temporal del 5 de marzo. El beneficiario reporta daños en el techo de su vivienda y solicita asistencia para la reparación de los mismos.",
        documentos: [
          { id: 1, nombre: "Formulario_Solicitud.pdf", tipo: "pdf" },
          { id: 2, nombre: "Fotos_Daños.zip", tipo: "zip" },
          { id: 3, nombre: "Presupuesto_Reparación.pdf", tipo: "pdf" },
        ],
        historial: [
          {
            id: 1,
            tipo: "recibida",
            titulo: "Solicitud recibida por Compensaciones",
            descripcion: "La solicitud ha sido asignada al operador Carlos Gómez para su evaluación.",
            fecha: "14/03/2024 10:30",
          },
          {
            id: 2,
            tipo: "verificada",
            titulo: "Documentación verificada",
            descripcion: "Se ha verificado que toda la documentación está completa y es válida.",
            fecha: "13/03/2024 15:45",
          },
          {
            id: 3,
            tipo: "informacion",
            titulo: "Solicitud de información adicional",
            descripcion: "Se ha solicitado al beneficiario que proporcione fotos adicionales de los daños.",
            fecha: "12/03/2024 14:20",
          },
          {
            id: 4,
            tipo: "creada",
            titulo: "Solicitud creada",
            descripcion: "El beneficiario ha creado la solicitud en el sistema.",
            fecha: "12/03/2024 09:15",
          },
        ],
        comunicaciones: {
          mensajes: [
            {
              id: 1,
              remitente: {
                nombre: "Carlos Gómez",
                rol: "Operador",
                avatar: "/placeholder.svg?height=40&width=40",
                iniciales: "CG",
              },
              contenido:
                "Estimado Juan, hemos recibido las fotos adicionales. Gracias por enviarlas. Estamos procesando su solicitud y le informaremos cuando haya novedades.",
              fecha: "13/03/2024 15:30",
            },
            {
              id: 2,
              remitente: {
                nombre: "Juan Díaz",
                rol: "Beneficiario",
                avatar: "/placeholder.svg?height=40&width=40",
                iniciales: "JD",
              },
              contenido: "Adjunto las fotos adicionales que me solicitaron. Por favor, avísenme si necesitan algo más.",
              fecha: "13/03/2024 14:45",
              esBeneficiario: true,
            },
            {
              id: 3,
              remitente: {
                nombre: "Carlos Gómez",
                rol: "Operador",
                avatar: "/placeholder.svg?height=40&width=40",
                iniciales: "CG",
              },
              contenido:
                "Hola Juan, necesitamos algunas fotos adicionales de los daños en el techo para poder evaluar mejor su solicitud. ¿Podría enviarlas a la brevedad? Gracias.",
              fecha: "12/03/2024 14:20",
            },
          ],
          llamadas: [
            {
              id: 1,
              tipo: "saliente",
              fecha: "12/03/2024 11:30",
              duracion: "5:23",
            },
          ],
        },
        notasInternas: [
          {
            id: 1,
            autor: "Carlos Gómez",
            contenido: "Verificar si el beneficiario tiene cobertura de seguro para este tipo de daños.",
            fecha: "14/03/2024",
          },
          {
            id: 2,
            autor: "Ana Martínez",
            contenido: "El presupuesto presentado está dentro de los parámetros aceptables.",
            fecha: "13/03/2024",
          },
        ],
      }

      set({ solicitudActual: mockSolicitud, isLoading: false })
      return mockSolicitud
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al obtener la solicitud",
        isLoading: false,
      })
      throw error
    }
  },

  // Crear una nueva solicitud
  createSolicitud: async (solicitudData) => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.post('/api/solicitudes', solicitudData)

      // Simulamos una respuesta exitosa
      const mockResponse = {
        id: Math.floor(Math.random() * 10000).toString(),
        ...solicitudData,
        estado: "Pendiente",
        fechaCreacion: new Date().toLocaleDateString(),
        fechaActualizacion: new Date().toLocaleDateString(),
      }

      set((state) => ({
        solicitudes: [mockResponse, ...state.solicitudes],
        isLoading: false,
      }))

      return mockResponse
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al crear la solicitud",
        isLoading: false,
      })
      throw error
    }
  },

  // Actualizar el estado de una solicitud
  updateSolicitudStatus: async (id, nuevoEstado) => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.patch(`/api/solicitudes/${id}/estado`, { estado: nuevoEstado })

      // Actualizamos localmente
      set((state) => ({
        solicitudes: state.solicitudes.map((sol) =>
          sol.id === id ? { ...sol, estado: nuevoEstado, fechaActualizacion: new Date().toLocaleDateString() } : sol,
        ),
        solicitudActual:
          state.solicitudActual?.id === id
            ? { ...state.solicitudActual, estado: nuevoEstado, fechaActualizacion: new Date().toLocaleDateString() }
            : state.solicitudActual,
        isLoading: false,
      }))

      return { success: true }
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al actualizar el estado",
        isLoading: false,
      })
      throw error
    }
  },
}))

