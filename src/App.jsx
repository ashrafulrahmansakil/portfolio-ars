
import { ThemeProvider } from './context/ThemeContenxt';
import IndexRoute from './routes/IndexRoute';
export default function App() {
  return (
    <>
      <ThemeProvider>
        <IndexRoute/>
      </ThemeProvider>
    </>
  )
}
