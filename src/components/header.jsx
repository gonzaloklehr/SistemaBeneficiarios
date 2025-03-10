"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Bell, HelpCircle, Search, User } from "lucide-react"
import { Input } from "./ui/input"
import { ThemeToggle } from "./theme-toggle"
import { useAuthStore } from "../store/auth-store"
import { Link } from "react-router-dom"

export function Header() {
  const { user, logout } = useAuthStore()

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar solicitudes, beneficiarios..."
            className="w-full pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="/notificaciones">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notificaciones</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link to="/ayuda">
            <HelpCircle className="h-4 w-4" />
            <span className="sr-only">Ayuda</span>
          </Link>
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={user?.avatar || "/placeholder.svg?height=32&width=32"}
                  alt={user?.name || "@usuario"}
                />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name || "Usuario"}</p>
                <p className="text-xs leading-none text-muted-foreground">{user?.email || "usuario@ejemplo.com"}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/perfil">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:text-red-500" onClick={logout}>
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

