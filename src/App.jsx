import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout.jsx';
import ErrorElement from "./helperComponents/ErrorElement.jsx";
import UndefinedPath from "./helperComponents/UndefinedPath.jsx";
import Loader from './helperComponents/Loader.jsx';
import "./App.css";

const Homepage = lazy(() => import("./routes/Hompage.jsx"));
const Project = lazy(() => import("./routes/Project.jsx"));
const Team = lazy(() => import("./routes/Team.jsx"));
const Contact = lazy(() => import("./routes/Contact.jsx"));
const Vision = lazy(() => import("./routes/Vision.jsx"));


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorElement />} >
        <Route index element={
          <Suspense fallback={<Loader props={"Homepage"} />} >
            <Homepage />
          </Suspense>
        } />
        <Route index element={
          <Suspense fallback={<Loader props={"Homepage"} />} >
            <Homepage />
          </Suspense>
        } />
        <Route path="project" element={
          <Suspense fallback={<Loader props={"Projects"} />} >
            <Project />
          </Suspense>
        } />
        <Route path="vision" element={
          <Suspense fallback={<Loader props={"Vision"} />} >
            <Vision />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<Loader props={"Contact"} />} >
            <Contact />
          </Suspense>
        } />
        <Route path="team" element={
          <Suspense fallback={<Loader props={"Team"} />} >
            <Team />
          </Suspense>
        } />
        <Route path="*" element={<UndefinedPath />} />
      </Route>
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}