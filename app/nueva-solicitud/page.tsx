"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NuevaSolicitudPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false)
      // Aquí iría la redirección o mensaje de éxito
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/solicitudes">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Nueva Solicitud</h1>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Formulario de Solicitud</CardTitle>
          <CardDescription>Complete los datos para crear una nueva solicitud en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Solicitud</Label>
                  <Select required>
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Seleccione un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compensacion">Compensación</SelectItem>
                      <SelectItem value="habilitacion">Habilitación</SelectItem>
                      <SelectItem value="fiscalizacion">Fiscalización</SelectItem>
                      <SelectItem value="certificacion">Certificación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Área Destino</Label>
                  <Select required>
                    <SelectTrigger id="area">
                      <SelectValue placeholder="Seleccione un área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compensaciones">Compensaciones</SelectItem>
                      <SelectItem value="dgcope">DGCOPE</SelectItem>
                      <SelectItem value="fiscalizadores">Fiscalizadores Lavalle</SelectItem>
                      <SelectItem value="bomberos">Bomberos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="beneficiario">Beneficiario</Label>
                <Select required>
                  <SelectTrigger id="beneficiario">
                    <SelectValue placeholder="Seleccione un beneficiario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Juan Díaz (DNI: 28.456.789)</SelectItem>
                    <SelectItem value="2">María Rodríguez (DNI: 30.123.456)</SelectItem>
                    <SelectItem value="3">Pedro Gómez (DNI: 25.789.012)</SelectItem>
                    <SelectItem value="4">Laura Fernández (DNI: 32.456.789)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input id="titulo" placeholder="Ingrese un título descriptivo" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea id="descripcion" placeholder="Describa detalladamente la solicitud" rows={5} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prioridad">Prioridad</Label>
                <Select>
                  <SelectTrigger id="prioridad">
                    <SelectValue placeholder="Seleccione la prioridad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baja">Baja</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Documentos Adjuntos</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Arrastre y suelte archivos aquí o haga clic para seleccionar
                  </p>
                  <p className="text-xs text-muted-foreground">Formatos permitidos: PDF, JPG, PNG (máx. 10MB)</p>
                  <Input id="documentos" type="file" className="hidden" multiple />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.getElementById("documentos")?.click()}
                  >
                    Seleccionar Archivos
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" asChild>
                <Link href="/solicitudes">Cancelar</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Crear Solicitud"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

