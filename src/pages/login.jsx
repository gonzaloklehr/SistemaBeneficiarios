"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth-store"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Alert, AlertDescription } from "../components/ui/alert"
import { ThemeToggle } from "../components/theme-toggle"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login, isLoading } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await login({ email, password })
      navigate("/")
    } catch (err) {
      setError(err.message || "Error al iniciar sesión")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Sistema de Gestión</CardTitle>
          <CardDescription>Ingrese sus credenciales para acceder al sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ejemplo@policia.gob.ar"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Button variant="link" className="px-0 font-normal h-auto" type="button">
                  ¿Olvidó su contraseña?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            <p className="text-muted-foreground">Para probar diferentes roles, use estos emails:</p>
            <div className="mt-2 text-xs space-y-1">
              <p>admin@policia.gob.ar</p>
              <p>compensaciones@policia.gob.ar</p>
              <p>dgcope@policia.gob.ar</p>
              <p>planificacion@policia.gob.ar</p>
              <p>fiscalizadores@policia.gob.ar</p>
              <p>bomberos@policia.gob.ar</p>
              <p>beneficiario@ejemplo.com</p>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">(Cualquier contraseña funcionará para esta demo)</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-xs text-center text-muted-foreground mt-4">
            Sistema de Gestión de Solicitudes de Servicios Policiales
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

