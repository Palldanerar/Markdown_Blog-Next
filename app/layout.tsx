import MyFooter from './components/MyFooter'
import MyHeader from './components/MyHeader'
import './globals.css'

export const metadata = {
  title: 'Markdown Blog',
  description: 'Yes?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MyHeader />
        {children}
        <MyFooter />
      </body>
    </html>
  )
}
