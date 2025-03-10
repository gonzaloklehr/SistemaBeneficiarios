import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, Clock, FileText, MessageSquare, XCircle } from "lucide-react"
import Link from "next/link"

export default function SolicitudDetallePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/solicitudes">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Solicitud #{params.id}</h1>
        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 ml-4">
          En proceso
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalles de la Solicitud</CardTitle>
              <CardDescription>
                Información general sobre la solicitud
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Tipo de Solicitud</h3>
                  <p className="text-sm">Compensación</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Fecha de Creación</h3>
                  <p className="text-sm">12/03/2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Última Actualización</h3>
                  <p className="text-sm">14/03/2024</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Área Actual</h3>
                  <p className="text-sm">Compensaciones</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Prioridad</h3>
                  <p className="text-sm">Media</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Tiempo Estimado</h3>
                  <p className="text-sm">5 días hábiles</p>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-sm font-medium mb-2">Descripción</h3>
                <p className="text-sm">
                  Solicitud de compensación por daños ocasionados durante el temporal del 5 de marzo. 
                  El beneficiario reporta daños en el techo de su vivienda y solicita asistencia para 
                  la reparación de los mismos.
                </p>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-sm font-medium mb-2">Documentos Adjuntos</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Formulario_Solicitud.pdf</span>
                    </div>
                    <Button variant="ghost" size="sm">Ver</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Fotos_Daños.zip</span>
                    </div>
                    <Button variant="ghost" size="sm">Ver</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded-md">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Presupuesto_Reparación.pdf</span>
                    </div>
                    <Button variant="ghost" size="sm">Ver</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historial de la Solicitud</CardTitle>
              <CardDescription>
                Seguimiento de los cambios y actualizaciones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Solicitud recibida por Compensaciones</h3>
                      <span className="text-xs text-muted-foreground">14/03/2024 10:30</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      La solicitud ha sido asignada al operador Carlos Gómez para su evaluación.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Documentación verificada</h3>
                      <span className="text-xs text-muted-foreground">13/03/2024 15:45</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Se ha verificado que toda la documentación está completa y es válida.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Solicitud de información adicional</h3>
                      <span className="text-xs text-muted-foreground">12/03/2024 14:20</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Se ha solicitado al beneficiario que proporcione fotos adicionales de los daños.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Solicitud creada</h3>
                      <span className="text-xs text-muted-foreground">12/03/2024 09:15</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      El beneficiario ha creado la solicitud en el sistema.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <CardContent>
     <div className="space-y-6">
          
         <Card>
            <CardHeader>
              <CardTitle>Beneficiario</CardTitle>
              <CardDescription>
                Información del solicitante
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <Avatar className="h-20 w-20 mb-2">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-medium">Juan Díaz</h3>
                <p className="text-sm text-muted-foreground">DNI: 28.456.789</p>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p className="text-sm">juan.diaz@ejemplo.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Teléfono</h3>
                  <p className="text-sm">+54 11 4567-8901</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Dirección</h3>
                  <p className="text-sm">Av. Rivadavia 1234, CABA</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Solicitudes Activas</h3>
                  <p className="text-sm">2 solicitudes</p>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                Ver Perfil Completo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acciones</CardTitle>
              <CardDescription>
                Gestione el estado de la solicitud
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="default">
                <CheckCircle className="mr-2 h-4 w-4" />
                Aprobar Solicitud
              </Button>
              <Button className="w-full" variant="outline">
                <XCircle className="mr-2 h-4 w-4" />
                Rechazar Solicitud
              </Button>
              <Button className="w-full" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Solicitar Información
              </Button>
              <Button className="w-full" variant="outline">
                Derivar a otra Área
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notas Internas</CardTitle>
              <CardDescription>
                Notas visibles solo para el personal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="bg-muted p-3 rounded-md">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">Carlos Gómez</h3>
                    <span className="text-xs text-muted-foreground">14/03/2024</span>
                  </div>
                  <p className="text-sm">
                    Verificar si el beneficiario tiene cobertura de seguro para este tipo de daños.
                  </p>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium">Ana Martínez</h3>
                    <span className="text-xs text-muted-foreground">13/03/2024</span>
                  </div>
                  <p className="text-sm">
                    El presupuesto presentado está dentro de los parámetros aceptables.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Agregar una nota..." />
                <Button>Agregar</Button>
              </div>
            </CardContent>
          </Card>
          </div>
                <Button>Agregar</Button>
           
            </CardContent>
         
      <Card>
        <CardHeader>
          <CardTitle>Comunicaciones</CardTitle>
          <CardDescription>
            Historial de comunicaciones con el beneficiario
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mensajes">
            <TabsList className="mb-4">
              <TabsTrigger value="mensajes">Mensajes</TabsTrigger>
              <TabsTrigger value="emails">Emails</TabsTrigger>
              <TabsTrigger value="llamadas">Llamadas</TabsTrigger>
            </TabsList>
            <TabsContent value="mensajes">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>CG</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 bg-muted p-3 rounded-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Carlos Gómez (Operador)</h3>
                      <span className="text-xs text-muted-foreground">13/03/2024 15:30</span>
                    </div>
                    <p className="text-sm">
                      Estimado Juan, hemos recibido las fotos adicionales. Gracias por enviarlas.
                      Estamos procesando su solicitud y le informaremos cuando haya novedades.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 flex-row-reverse">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 bg-primary/10 p-3 rounded-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Juan Díaz (Beneficiario)</h3>
                      <span className="text-xs text-muted-foreground">13/03/2024 14:45</span>
                    </div>
                    <p className="text-sm">
                      Adjunto las fotos adicionales que me solicitaron. Por favor, avísenme si necesitan algo más.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                    <AvatarFallback>CG</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 bg-muted p-3 rounded-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Carlos Gómez (Operador)</h3>
                      <span className="text-xs text-muted-foreground">12/03/2024 14:20</span>
                    </div>
                    <p className="text-sm">
                      Hola Juan, necesitamos algunas fotos adicionales de los daños en el techo para poder evaluar mejor su solicitud.
                      ¿Podría enviarlas a la brevedad? Gracias.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Input placeholder="Escribir un mensaje..." />
                <Button>Enviar</Button>
              </div>
            </TabsContent>
            <TabsContent value="emails">
              <div className="text-center py-8 text-muted-foreground">
                No hay emails registrados para esta solicitud.
              </div>
            </TabsContent>
            <TabsContent value="llamadas">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Llamada saliente</h3>
                    <p className="text-sm text-muted-foreground">12/03/2024 11:30 - Duración: 5:23</p>
                  </div>
                  <Button variant="outline" size="sm">Ver detalles</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

