import './globals.css'

export const metadata = {
  title: 'Consulta API',
  description: 'Created using NextJS + Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
