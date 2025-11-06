import Header from '../components/Header/Header'
import Footer from './../components/Footer/Footer';

export default function Layout(props) {
  return (
    < div className='dark:bg-slate-800 transition-all duration-300'>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
