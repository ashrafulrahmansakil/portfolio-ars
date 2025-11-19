import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './../pages/Index';

export default function IndexRoute() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Index />} exact />
                    </Routes>
            </BrowserRouter>
        </>
    )
}
