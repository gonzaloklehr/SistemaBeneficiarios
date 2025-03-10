"use client"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import {
  Users,
  ClipboardList,
  FileCheck,
  Settings,
  LogOut,
  Home,
  Bell,
  FileText,
  UserCheck,
  Shield,
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useAuthStore, ROLES } from "../store/auth-store"

export function Sidebar({ className }) {
  const location = useLocation()
  const { pathname } = location
  const { role, hasRole, logout } = useAuthStore()

  return (
    <div className={cn("pb-12 w-64 bg-card border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">Sistema de Gestión</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start" asChild>
              <Link
                to="/"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                to="/solicitudes"
                className={cn(
                  "flex items-center gap-2",
                  pathname.startsWith("/solicitudes") ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <ClipboardList className="h-4 w-4" />
                Solicitudes
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                to="/beneficiarios"
                className={cn(
                  "flex items-center gap-2",
                  pathname.startsWith("/beneficiarios") ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <Users className="h-4 w-4" />
                Beneficiarios
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                to="/notificaciones"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/notificaciones" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <Bell className="h-4 w-4" />
                Notificaciones
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Áreas</h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              {(hasRole(ROLES.ADMIN) || hasRole(ROLES.COMPENSACIONES)) && (
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link
                    to="/areas/compensaciones"
                    className={cn(
                      "flex items-center gap-2",
                      pathname === "/areas/compensaciones"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "",
                    )}
                  >
                    <Shield className="h-4 w-4" />
                    Compensaciones
                  </Link>
                </Button>
              )}
              {(hasRole(ROLES.ADMIN) || hasRole(ROLES.DGCOPE)) && (
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link
                    to="/areas/dgcope"
                    className={cn(
                      "flex items-center gap-2",
                      pathname === "/areas/dgcope" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                    )}
                  >
                    <FileCheck className="h-4 w-4" />
                    DGCOPE
                  </Link>
                </Button>
              )}
              {(hasRole(ROLES.ADMIN) || hasRole(ROLES.PLANIFICACION)) && (
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link
                    to="/areas/planificacion"
                    className={cn(
                      "flex items-center gap-2",
                      pathname === "/areas/planificacion"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "",
                    )}
                  >
                    <FileText className="h-4 w-4" />
                    Planificación
                  </Link>
                </Button>
              )}
              {(hasRole(ROLES.ADMIN) || hasRole(ROLES.FISCALIZADORES)) && (
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link
                    to="/areas/fiscalizadores"
                    className={cn(
                      "flex items-center gap-2",
                      pathname === "/areas/fiscalizadores"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "",
                    )}
                  >
                    <UserCheck className="h-4 w-4" />
                    Fiscalizadores Lavalle
                  </Link>
                </Button>
              )}
              {(hasRole(ROLES.ADMIN) || hasRole(ROLES.BOMBEROS)) && (
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link
                    to="/areas/bomberos"
                    className={cn(
                      "flex items-center gap-2",
                      pathname === "/areas/bomberos" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                    )}
                  >
                    <FileCheck className="h-4 w-4" />
                    Bomberos
                  </Link>
                </Button>
              )}
            </div>
          </ScrollArea>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Configuración</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                to="/configuracion"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/configuracion" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <Settings className="h-4 w-4" />
                Configuración
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

