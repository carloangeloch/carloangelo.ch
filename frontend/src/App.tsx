import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './components/Header';
import AppProvider from './context/AppContext';
import _ExpandingBox from './_tests/_ExpandingBox';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Profile = lazy(() => import('./pages/Profile'))
const ContactMe = lazy(() => import('./pages/ContactMe'))
const MyWorks = lazy(() => import('./pages/MyWorks'))
const Page404 = lazy(() => import('./pages/Page404'))

function App() {
  return (
    <Router>
        <AppProvider>
            <Suspense fallback={<Loading/>}>
                <div className='w-full relative'>
                    <Header/>
                </div>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/contact' element={<ContactMe/>}/>
                    <Route path='/works' element={<MyWorks/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Routes>
                <Footer/>
            </Suspense>
        </AppProvider>
    </Router>
  )
}

export default App
