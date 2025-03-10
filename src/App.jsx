import { Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "./components/layout"
import { LoginPage } from "./pages/login"
import { DashboardPage } from "./pages/dashboard"
import { useAuthStore } from "./store/auth-store"
import { Suspense, lazy } from "react"

// Carga perezosa de componentes para mejorar el rendimiento
const SolicitudesPage = lazy(() => import("./pages/solicitudes"))
const SolicitudDetallePage = lazy(() => import("./pages/solicitud-detalle"))
const NuevaSolicitudPage = lazy(() => import("./pages/nueva-solicitud"))
const BeneficiariosPage = lazy(() => import("./pages/beneficiarios"))
const BeneficiarioDetallePage = lazy(() => import("./pages/beneficiario-detalle"))
const NotificacionesPage = lazy(() => import("./pages/notificaciones"))
const ConfiguracionPage = lazy(() => import("./pages/configuracion"))
const PerfilPage = lazy(() => import("./pages/perfil"))
const AyudaPage = lazy(() => import("./pages/ayuda"))

// Componentes de áreas específicas
const CompensacionesPage = lazy(() => import("./pages/areas/compensaciones"))
const DGCOPEPage = lazy(() => import("./pages/areas/dgcope"))
const PlanificacionPage = lazy(() => import("./pages/areas/planificacion"))
const FiscalizadoresPage = lazy(() => import("./pages/areas/fiscalizadores"))
const BomberosPage = lazy(() => import("./pages/areas/bomberos"))

// Componente de carga
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

function App() {
  const { isAuthenticated } = useAuthStore()

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />

        <Route
          path="solicitudes"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <SolicitudesPage />
            </Suspense>
          }
        />

        <Route
          path="solicitudes/:id"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <SolicitudDetallePage />
            </Suspense>
          }
        />

        <Route
          path="nueva-solicitud"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <NuevaSolicitudPage />
            </Suspense>
          }
        />

        <Route
          path="beneficiarios"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <BeneficiariosPage />
            </Suspense>
          }
        />

        <Route
          path="beneficiarios/:id"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <BeneficiarioDetallePage />
            </Suspense>
          }
        />

        <Route
          path="notificaciones"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <NotificacionesPage />
            </Suspense>
          }
        />

        <Route
          path="configuracion"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ConfiguracionPage />
            </Suspense>
          }
        />

        <Route
          path="perfil"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <PerfilPage />
            </Suspense>
          }
        />

        <Route
          path="ayuda"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AyudaPage />
            </Suspense>
          }
        />

        {/* Rutas de áreas específicas */}
        <Route
          path="areas/compensaciones"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <CompensacionesPage />
            </Suspense>
          }
        />

        <Route
          path="areas/dgcope"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <DGCOPEPage />
            </Suspense>
          }
        />

        <Route
          path="areas/planificacion"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <PlanificacionPage />
            </Suspense>
          }
        />

        <Route
          path="areas/fiscalizadores"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <FiscalizadoresPage />
            </Suspense>
          }
        />

        <Route
          path="areas/bomberos"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <BomberosPage />
            </Suspense>
          }
        />
      </Route>

      {/* Ruta de fallback para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

