import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EyeIcon } from "lucide-react"
import Link from "next/link"

export function SolicitudesRecientes() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Beneficiario</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Fecha</TableHead>
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
          <TableCell>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              En proceso
            </Badge>
          </TableCell>
          <TableCell>12/03/2024</TableCell>
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
          <TableCell>DGCOPE</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Aprobada
            </Badge>
          </TableCell>
          <TableCell>10/03/2024</TableCell>
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
          <TableCell>
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              Rechazada
            </Badge>
          </TableCell>
          <TableCell>08/03/2024</TableCell>
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
          <TableCell>Bomberos</TableCell>
          <TableCell>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              En revisión
            </Badge>
          </TableCell>
          <TableCell>05/03/2024</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/solicitudes/1231">
                <EyeIcon className="h-4 w-4" />
                <span className="sr-only">Ver detalles</span>
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

