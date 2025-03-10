"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Users, ClipboardList, FileCheck, Settings, LogOut, Home, Bell, FileText, UserCheck } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 w-64 bg-card border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">Sistema de Control</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start" asChild>
              <Link
                href="/"
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
                href="/solicitudes"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/solicitudes" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <ClipboardList className="h-4 w-4" />
                Solicitudes
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="/beneficiarios"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/beneficiarios" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <Users className="h-4 w-4" />
                Beneficiarios
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="/notificaciones"
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
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link
                  href="/areas/compensaciones"
                  className={cn(
                    "flex items-center gap-2",
                    pathname === "/areas/compensaciones"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "",
                  )}
                >
                  <FileText className="h-4 w-4" />
                  Compensaciones
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link
                  href="/areas/dgcope"
                  className={cn(
                    "flex items-center gap-2",
                    pathname === "/areas/dgcope" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                  )}
                >
                  <FileCheck className="h-4 w-4" />
                  DGCOPE
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link
                  href="/areas/fiscalizadores"
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
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link
                  href="/areas/bomberos"
                  className={cn(
                    "flex items-center gap-2",
                    pathname === "/areas/bomberos" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                  )}
                >
                  <FileCheck className="h-4 w-4" />
                  Bomberos
                </Link>
              </Button>
            </div>
          </ScrollArea>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Configuración</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link
                href="/configuracion"
                className={cn(
                  "flex items-center gap-2",
                  pathname === "/configuracion" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "",
                )}
              >
                <Settings className="h-4 w-4" />
                Configuración
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

