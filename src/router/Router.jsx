import { Routes, Route } from 'react-router-dom'

import Home from '../page/Home'
import Flowers from '../page/Flowers'
import Plants from '../page/Plants'
import Catalog from '../page/Catalog'
import NotFound from '../page/NotFound'
const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flowers' element={<Flowers />} />;
        <Route path='/plants' element={<Plants />} />;
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='*' element={<NotFound />} />;
      </Routes>
    </>
  )
}

export default Router
