import { AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, FileText, XCircle } from "lucide-react"
import { DashboardStats } from "@/components/dashboard-stats"
import { SolicitudesRecientes } from "@/components/solicitudes-recientes"
import { EstadisticasChart } from "@/components/estadisticas-chart"

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats
          title="Total Solicitudes"
          value="1,234"
          description="+12% desde el mes pasado"
          icon={<FileText className="h-5 w-5 text-blue-600" />}
        />
        <DashboardStats
          title="Solicitudes Pendientes"
          value="45"
          description="-3% desde el mes pasado"
          icon={<Clock className="h-5 w-5 text-yellow-600" />}
        />
        <DashboardStats
          title="Solicitudes Aprobadas"
          value="892"
          description="+18% desde el mes pasado"
          icon={<CheckCircle2 className="h-5 w-5 text-green-600" />}
        />
        <DashboardStats
          title="Solicitudes Rechazadas"
          value="123"
          description="-5% desde el mes pasado"
          icon={<XCircle className="h-5 w-5 text-red-600" />}
        />
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="bg-muted">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="compensaciones">Compensaciones</TabsTrigger>
          <TabsTrigger value="dgcope">DGCOPE</TabsTrigger>
          <TabsTrigger value="fiscalizadores">Fiscalizadores</TabsTrigger>
          <TabsTrigger value="bomberos">Bomberos</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Actividad de Solicitudes</CardTitle>
                <CardDescription>Solicitudes procesadas en los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <EstadisticasChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Distribución por Área</CardTitle>
                <CardDescription>Solicitudes activas por área de procesamiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="flex-1">Compensaciones</div>
                      <div className="font-medium">45%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="flex-1">DGCOPE</div>
                      <div className="font-medium">30%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="flex-1">Fiscalizadores Lavalle</div>
                      <div className="font-medium">15%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="flex-1">Bomberos</div>
                      <div className="font-medium">10%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle>Solicitudes Recientes</CardTitle>
                  <CardDescription>Últimas solicitudes ingresadas al sistema</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <SolicitudesRecientes />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Beneficiarios Activos</CardTitle>
                <CardDescription>Beneficiarios con solicitudes en proceso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Juan Díaz</p>
                      <p className="text-sm text-muted-foreground">2 solicitudes activas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">María Rodríguez</p>
                      <p className="text-sm text-muted-foreground">1 solicitud activa</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                      <AvatarFallback>PG</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Pedro Gómez</p>
                      <p className="text-sm text-muted-foreground">3 solicitudes activas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Laura Fernández</p>
                      <p className="text-sm text-muted-foreground">1 solicitud activa</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="compensaciones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Área de Compensaciones</CardTitle>
              <CardDescription>Estadísticas y solicitudes del área de Compensaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contenido específico del área de Compensaciones</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dgcope" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Área de DGCOPE</CardTitle>
              <CardDescription>Estadísticas y solicitudes del área de DGCOPE</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contenido específico del área de DGCOPE</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="fiscalizadores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Área de Fiscalizadores Lavalle</CardTitle>
              <CardDescription>Estadísticas y solicitudes del área de Fiscalizadores</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contenido específico del área de Fiscalizadores</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bomberos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Área de Bomberos</CardTitle>
              <CardDescription>Estadísticas y solicitudes del área de Bomberos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contenido específico del área de Bomberos</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

