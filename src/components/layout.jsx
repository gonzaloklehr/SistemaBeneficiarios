import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { Outlet, Navigate } from "react-router-dom"
import { useAuthStore } from "../store/auth-store"

export function Layout() {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

