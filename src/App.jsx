import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'

// Route-level code splitting: each page (and anything heavy it pulls in,
// e.g. ProjectDetail's syntax highlighter) only downloads when visited.
const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About = lazy(() => import('./pages/About'))
const Lab = lazy(() => import('./pages/Lab'))
const Contact = lazy(() => import('./pages/Contact'))

function RouteFallback() {
  return <div className="mx-auto max-w-[1140px] px-6 py-24 font-mono text-sm text-[var(--text-dim)]">Loading…</div>
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/work"
            element={
              <PageTransition>
                <Work />
              </PageTransition>
            }
          />
          <Route
            path="/work/:slug"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/lab"
            element={
              <PageTransition>
                <Lab />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
