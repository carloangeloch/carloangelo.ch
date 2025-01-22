import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './v2/pages/Home'
import Header from './components/Header';
import AppProvider from './context/AppContext';
import _ExpandingBox from './_tests/_ExpandingBox';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Profile = lazy(() => import('./pages/Profile'))
const ContactMe = lazy(() => import('./pages/ContactMe'))
const MyWorks = lazy(() => import('./pages/MyWorks'))
const Page404 = lazy(() => import('./pages/Page404'))
const WorkV2 = lazy(() => import('./v2/pages/Work'))
const ProfileV2 = lazy(() => import('./v2/pages/Profile'))
const JobsV2 = lazy(() => import('./v2/pages/Jobs'))
const ContactV2 = lazy(() => import('./v2/pages/Contact'))

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
                    <Route path='/works/:dataId' element={<MyWorks/>}/>
                    <Route path='/test/v2/home' element={<Home/>}/>
                    <Route path='/test/v2/work' element={<WorkV2/>}/>
                    <Route path='/test/v2/profile' element={<ProfileV2/>}/>
                    <Route path='/test/v2/jobs' element={<JobsV2/>}/>
                    <Route path='/test/v2/contact' element={<ContactV2/>}/>
                    <Route path='*' element={<Page404/>}/>
                </Routes>
                <Footer/>
            </Suspense>
        </AppProvider>
    </Router>
  )
}

export default App
