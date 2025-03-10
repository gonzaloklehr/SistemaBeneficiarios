import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { EyeIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function SolicitudesRecientes({ solicitudes = [] }) {
  // Función para determinar el color de la badge según el estado
  const getBadgeStyle = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "En proceso":
      case "En revisión":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Aprobada":
        return "bg-green-50 text-green-700 border-green-200"
      case "Rechazada":
        return "bg-red-50 text-red-700 border-red-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

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
        {solicitudes.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
              No hay solicitudes para mostrar
            </TableCell>
          </TableRow>
        ) : (
          solicitudes.map((solicitud) => (
            <TableRow key={solicitud.id}>
              <TableCell className="font-medium">#{solicitud.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={solicitud.beneficiario.avatar} alt="Avatar" />
                    <AvatarFallback>{solicitud.beneficiario.iniciales}</AvatarFallback>
                  </Avatar>
                  <span>{solicitud.beneficiario.nombre}</span>
                </div>
              </TableCell>
              <TableCell>{solicitud.tipo}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getBadgeStyle(solicitud.estado)}>
                  {solicitud.estado}
                </Badge>
              </TableCell>
              <TableCell>{solicitud.fechaCreacion}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/solicitudes/${solicitud.id}`}>
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Ver detalles</span>
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

