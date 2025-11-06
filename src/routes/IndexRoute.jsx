import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './../pages/Index';
import Portfolio from './../pages/Portfolio';

export default function IndexRoute() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Index />} exact />
                        <Route path='/portfolio' element={<Portfolio />} exact />
                    </Routes>
            </BrowserRouter>
        </>
    )
}
