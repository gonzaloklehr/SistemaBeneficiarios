import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"

// Definición de roles y sus permisos
const ROLES = {
  ADMIN: "admin",
  COMPENSACIONES: "compensaciones",
  DGCOPE: "dgcope",
  PLANIFICACION: "planificacion",
  FISCALIZADORES: "fiscalizadores",
  BOMBEROS: "bomberos",
  BENEFICIARIO: "beneficiario",
}

const PERMISSIONS = {
  [ROLES.ADMIN]: ["*"],
  [ROLES.COMPENSACIONES]: ["read:solicitudes", "write:solicitudes", "assign:operadores", "create:presupuestos"],
  [ROLES.DGCOPE]: ["read:solicitudes", "evaluate:recursos", "write:evaluaciones"],
  [ROLES.PLANIFICACION]: ["read:solicitudes", "read:contratos", "create:ordenesServicio"],
  [ROLES.FISCALIZADORES]: ["read:solicitudes", "write:fiscalizaciones", "control:eventos"],
  [ROLES.BOMBEROS]: ["read:solicitudes", "verify:bomberos", "write:verificaciones"],
  [ROLES.BENEFICIARIO]: ["read:solicitudes", "create:solicitudes", "read:presupuestos"],
}

export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      role: null,
      permissions: [],
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null })
        try {
          // Simulación de llamada a API
          // En producción, esto sería una llamada real a tu backend
          // const response = await axios.post('/api/auth/login', credentials)

          // Simulamos una respuesta exitosa
          const mockResponse = {
            token: "mock-jwt-token",
            user: {
              id: 1,
              name: "Usuario Demo",
              email: credentials.email,
              avatar: "/placeholder.svg?height=32&width=32",
            },
            role: credentials.email.includes("admin")
              ? ROLES.ADMIN
              : credentials.email.includes("compensaciones")
                ? ROLES.COMPENSACIONES
                : credentials.email.includes("dgcope")
                  ? ROLES.DGCOPE
                  : credentials.email.includes("planificacion")
                    ? ROLES.PLANIFICACION
                    : credentials.email.includes("fiscalizadores")
                      ? ROLES.FISCALIZADORES
                      : credentials.email.includes("bomberos")
                        ? ROLES.BOMBEROS
                        : ROLES.BENEFICIARIO,
          }

          // Configuramos el token para futuras peticiones
          axios.defaults.headers.common["Authorization"] = `Bearer ${mockResponse.token}`

          set({
            token: mockResponse.token,
            user: mockResponse.user,
            role: mockResponse.role,
            permissions: PERMISSIONS[mockResponse.role] || [],
            isAuthenticated: true,
            isLoading: false,
          })

          return mockResponse
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error al iniciar sesión",
            isLoading: false,
          })
          throw error
        }
      },

      logout: () => {
        // Eliminamos el token de las cabeceras
        delete axios.defaults.headers.common["Authorization"]

        set({
          token: null,
          user: null,
          role: null,
          permissions: [],
          isAuthenticated: false,
        })
      },

      hasPermission: (permission) => {
        const { permissions } = get()
        return permissions.includes("*") || permissions.includes(permission)
      },

      hasRole: (role) => {
        return get().role === role || get().role === ROLES.ADMIN
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        role: state.role,
        permissions: state.permissions,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)

// Exportamos los roles para usarlos en la aplicación
export { ROLES }

