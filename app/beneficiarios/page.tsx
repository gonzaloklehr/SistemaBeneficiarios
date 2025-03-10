import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { EyeIcon, FilterIcon, PlusIcon } from "lucide-react"
import Link from "next/link"

export default function BeneficiariosPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Beneficiarios</h1>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Nuevo Beneficiario
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listado de Beneficiarios</CardTitle>
          <CardDescription>Gestione y visualice todos los beneficiarios registrados en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Input placeholder="Buscar por nombre, DNI..." className="w-[300px]" />
              <Button variant="outline" size="icon">
                <FilterIcon className="h-4 w-4" />
                <span className="sr-only">Filtrar</span>
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Beneficiario</TableHead>
                <TableHead>DNI</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Teléfono</TableHead>
                <TableHead>Dirección</TableHead>
                <TableHead>Solicitudes Activas</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>Juan Díaz</span>
                  </div>
                </TableCell>
                <TableCell>28.456.789</TableCell>
                <TableCell>juan.diaz@ejemplo.com</TableCell>
                <TableCell>+54 11 4567-8901</TableCell>
                <TableCell>Av. Rivadavia 1234, CABA</TableCell>
                <TableCell>2</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Activo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/beneficiarios/1">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <span>María Rodríguez</span>
                  </div>
                </TableCell>
                <TableCell>30.123.456</TableCell>
                <TableCell>maria.rodriguez@ejemplo.com</TableCell>
                <TableCell>+54 11 2345-6789</TableCell>
                <TableCell>Calle Corrientes 567, CABA</TableCell>
                <TableCell>1</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Activo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/beneficiarios/2">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>PG</AvatarFallback>
                    </Avatar>
                    <span>Pedro Gómez</span>
                  </div>
                </TableCell>
                <TableCell>25.789.012</TableCell>
                <TableCell>pedro.gomez@ejemplo.com</TableCell>
                <TableCell>+54 11 7890-1234</TableCell>
                <TableCell>Av. Santa Fe 890, CABA</TableCell>
                <TableCell>3</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Activo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/beneficiarios/3">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                    <span>Laura Fernández</span>
                  </div>
                </TableCell>
                <TableCell>32.456.789</TableCell>
                <TableCell>laura.fernandez@ejemplo.com</TableCell>
                <TableCell>+54 11 3456-7890</TableCell>
                <TableCell>Calle Callao 123, CABA</TableCell>
                <TableCell>1</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Activo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/beneficiarios/4">
                      <EyeIcon className="h-4 w-4" />
                      <span className="sr-only">Ver detalles</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <span>Carlos Martínez</span>
                  </div>
                </TableCell>
                <TableCell>27.890.123</TableCell>
                <TableCell>carlos.martinez@ejemplo.com</TableCell>
                <TableCell>+54 11 5678-9012</TableCell>
                <TableCell>Av. Córdoba 456, CABA</TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Inactivo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/beneficiarios/5">
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

