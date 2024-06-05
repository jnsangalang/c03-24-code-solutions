import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { Details } from './Details';
import { About } from './About';
import { NotFound } from './NotFound';
import { Catalog } from './Catalog';
// import {index} from '/lib'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<Details />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
