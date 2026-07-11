import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-md px-4 py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
