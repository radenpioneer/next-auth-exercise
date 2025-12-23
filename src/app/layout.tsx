import type { FC, PropsWithChildren } from "react";
import './style.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="id">
      <body className="min-h-dvh text-zinc-900 bg-zinc-50">
        {children}
        {process.env.NODE_ENV === 'development' && <script src="https://unpkg.com/react-scan/dist/auto.global.js" />}
      </body>
    </html>
  )
}

export default RootLayout