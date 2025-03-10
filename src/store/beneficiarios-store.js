import { create } from "zustand"

export const useBeneficiariosStore = create((set, get) => ({
  beneficiarios: [],
  beneficiarioActual: null,
  isLoading: false,
  error: null,

  // Obtener todos los beneficiarios
  fetchBeneficiarios: async () => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.get('/api/beneficiarios')

      // Simulamos datos para el maquetado
      const mockBeneficiarios = [
        {
          id: 1,
          nombre: "Juan Díaz",
          dni: "28.456.789",
          email: "juan.diaz@ejemplo.com",
          telefono: "+54 11 4567-8901",
          direccion: "Av. Rivadavia 1234, CABA",
          avatar: "/placeholder.svg?height=32&width=32",
          iniciales: "JD",
          solicitudesActivas: 2,
          estado: "Activo",
        },
        {
          id: 2,
          nombre: "María Rodríguez",
          dni: "30.123.456",
          email: "maria.rodriguez@ejemplo.com",
          telefono: "+54 11 2345-6789",
          direccion: "Calle Corrientes 567, CABA",
          avatar: "/placeholder.svg?height=32&width=32",
          iniciales: "MR",
          solicitudesActivas: 1,
          estado: "Activo",
        },
        {
          id: 3,
          nombre: "Pedro Gómez",
          dni: "25.789.012",
          email: "pedro.gomez@ejemplo.com",
          telefono: "+54 11 7890-1234",
          direccion: "Av. Santa Fe 890, CABA",
          avatar: "/placeholder.svg?height=32&width=32",
          iniciales: "PG",
          solicitudesActivas: 3,
          estado: "Activo",
        },
        {
          id: 4,
          nombre: "Laura Fernández",
          dni: "32.456.789",
          email: "laura.fernandez@ejemplo.com",
          telefono: "+54 11 3456-7890",
          direccion: "Calle Callao 123, CABA",
          avatar: "/placeholder.svg?height=32&width=32",
          iniciales: "LF",
          solicitudesActivas: 1,
          estado: "Activo",
        },
        {
          id: 5,
          nombre: "Carlos Martínez",
          dni: "27.890.123",
          email: "carlos.martinez@ejemplo.com",
          telefono: "+54 11 5678-9012",
          direccion: "Av. Córdoba 456, CABA",
          avatar: "/placeholder.svg?height=32&width=32",
          iniciales: "CM",
          solicitudesActivas: 0,
          estado: "Inactivo",
        },
      ]

      set({ beneficiarios: mockBeneficiarios, isLoading: false })
      return mockBeneficiarios
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al obtener beneficiarios",
        isLoading: false,
      })
      throw error
    }
  },

  // Obtener un beneficiario por ID
  fetchBeneficiarioById: async (id) => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.get(`/api/beneficiarios/${id}`)

      // Simulamos datos para el maquetado
      const mockBeneficiario = {
        id: Number.parseInt(id),
        nombre: "Juan Díaz",
        dni: "28.456.789",
        email: "juan.diaz@ejemplo.com",
        telefono: "+54 11 4567-8901",
        direccion: "Av. Rivadavia 1234, CABA",
        avatar: "/placeholder.svg?height=80&width=80",
        iniciales: "JD",
        solicitudesActivas: 2,
        estado: "Activo",
        fechaRegistro: "01/01/2023",
        solicitudes: [
          {
            id: "1234",
            tipo: "Compensación",
            estado: "En proceso",
            fechaCreacion: "12/03/2024",
          },
          {
            id: "1230",
            tipo: "Habilitación",
            estado: "Pendiente",
            fechaCreacion: "03/03/2024",
          },
        ],
        documentos: [
          { id: 1, nombre: "DNI.pdf", tipo: "pdf", fechaSubida: "01/01/2023" },
          { id: 2, nombre: "Comprobante_Domicilio.pdf", tipo: "pdf", fechaSubida: "01/01/2023" },
        ],
      }

      set({ beneficiarioActual: mockBeneficiario, isLoading: false })
      return mockBeneficiario
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al obtener el beneficiario",
        isLoading: false,
      })
      throw error
    }
  },

  // Crear un nuevo beneficiario
  createBeneficiario: async (beneficiarioData) => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.post('/api/beneficiarios', beneficiarioData)

      // Simulamos una respuesta exitosa
      const mockResponse = {
        id: Math.floor(Math.random() * 10000),
        ...beneficiarioData,
        avatar: "/placeholder.svg?height=32&width=32",
        iniciales: beneficiarioData.nombre
          .split(" ")
          .map((n) => n[0])
          .join(""),
        solicitudesActivas: 0,
        estado: "Activo",
        fechaRegistro: new Date().toLocaleDateString(),
      }

      set((state) => ({
        beneficiarios: [mockResponse, ...state.beneficiarios],
        isLoading: false,
      }))

      return mockResponse
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al crear el beneficiario",
        isLoading: false,
      })
      throw error
    }
  },

  // Actualizar un beneficiario
  updateBeneficiario: async (id, beneficiarioData) => {
    set({ isLoading: true, error: null })
    try {
      // En producción, esto sería una llamada real a tu backend
      // const response = await axios.put(`/api/beneficiarios/${id}`, beneficiarioData)

      // Actualizamos localmente
      set((state) => ({
        beneficiarios: state.beneficiarios.map((ben) => (ben.id === id ? { ...ben, ...beneficiarioData } : ben)),
        beneficiarioActual:
          state.beneficiarioActual?.id === id
            ? { ...state.beneficiarioActual, ...beneficiarioData }
            : state.beneficiarioActual,
        isLoading: false,
      }))

      return { success: true }
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al actualizar el beneficiario",
        isLoading: false,
      })
      throw error
    }
  },
}))

