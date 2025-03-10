import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EyeIcon, FilterIcon, PlusIcon } from "lucide-react"
import Link from "next/link"

export default function SolicitudesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Solicitudes</h1>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Nueva Solicitud
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listado de Solicitudes</CardTitle>
          <CardDescription>Gestione y visualice todas las solicitudes en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Input placeholder="Buscar por ID, beneficiario..." className="w-[300px]" />
              <Button variant="outline" size="icon">
                <FilterIcon className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Área:</span>
                <Select defaultValue="todas">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Todas las áreas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas las áreas</SelectItem>
                    <SelectItem value="compensaciones">Compensaciones</SelectItem>
                    <SelectItem value="dgcope">DGCOPE</SelectItem>
                    <SelectItem value="fiscalizadores">Fiscalizadores</SelectItem>
                    <SelectItem value="bomberos">Bomberos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Estado:</span>
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Todos los estados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los estados</SelectItem>
                    <SelectItem value="pendiente">Pendiente</SelectItem>
                    <SelectItem value="en_proceso">En proceso</SelectItem>
                    <SelectItem value="aprobada">Aprobada</SelectItem>
                    <SelectItem value="rechazada">Rechazada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Beneficiario</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Área Actual</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha Creación</TableHead>
                <TableHead>Última Actualización</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">#1234</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>Juan Díaz</span>
                  </div>
                </TableCell>
                <TableCell>Compensación</TableCell>
                <TableCell>Compensaciones</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    En proceso
                  </Badge>
                </TableCell>
                <TableCell>12/03/2024</TableCell>
                <TableCell>14/03/2024</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/solicitudes/1234">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#1233</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <span>María Rodríguez</span>
                  </div>
                </TableCell>
                <TableCell>Habilitación</TableCell>
                <TableCell>DGCOPE</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Aprobada
                  </Badge>
                </TableCell>
                <TableCell>10/03/2024</TableCell>
                <TableCell>13/03/2024</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/solicitudes/1233">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#1232</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>PG</AvatarFallback>
                    </Avatar>
                    <span>Pedro Gómez</span>
                  </div>
                </TableCell>
                <TableCell>Fiscalización</TableCell>
                <TableCell>Fiscalizadores Lavalle</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    Rechazada
                  </Badge>
                </TableCell>
                <TableCell>08/03/2024</TableCell>
                <TableCell>11/03/2024</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/solicitudes/1232">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#1231</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                    <span>Laura Fernández</span>
                  </div>
                </TableCell>
                <TableCell>Certificación</TableCell>
                <TableCell>Bomberos</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    En revisión
                  </Badge>
                </TableCell>
                <TableCell>05/03/2024</TableCell>
                <TableCell>09/03/2024</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/solicitudes/1231">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">#1230</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>Juan Díaz</span>
                  </div>
                </TableCell>
                <TableCell>Habilitación</TableCell>
                <TableCell>Compensaciones</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Pendiente
                  </Badge>
                </TableCell>
                <TableCell>03/03/2024</TableCell>
                <TableCell>07/03/2024</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/solicitudes/1230">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

