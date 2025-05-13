import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

const Home = lazy(() => import('./components/Home'));
const Blog = lazy(() => import('./components/Blog'));

export const Main = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);