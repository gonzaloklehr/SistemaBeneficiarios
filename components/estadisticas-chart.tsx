"use client"

import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { useEffect, useState } from "react"

const data = [
  { name: "01/03", solicitudes: 4, aprobadas: 3, rechazadas: 1 },
  { name: "05/03", solicitudes: 7, aprobadas: 5, rechazadas: 2 },
  { name: "10/03", solicitudes: 5, aprobadas: 3, rechazadas: 2 },
  { name: "15/03", solicitudes: 9, aprobadas: 7, rechazadas: 2 },
  { name: "20/03", solicitudes: 11, aprobadas: 8, rechazadas: 3 },
  { name: "25/03", solicitudes: 8, aprobadas: 6, rechazadas: 2 },
  { name: "30/03", solicitudes: 12, aprobadas: 9, rechazadas: 3 },
]

export function EstadisticasChart() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px]" />
  }

  const isDark = resolvedTheme === "dark"
  const gridColor = isDark ? "#333" : "#ddd"
  const textColor = isDark ? "#fff" : "#333"

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="name" stroke={textColor} />
        <YAxis stroke={textColor} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#fff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: textColor,
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="solicitudes" stroke="#3b82f6" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="aprobadas" stroke="#10b981" />
        <Line type="monotone" dataKey="rechazadas" stroke="#ef4444" />
      </LineChart>
    </ResponsiveContainer>
  )
}

