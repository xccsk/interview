//when adding a react project to the browser you will probaboply have a big application in the browser and to not overload data you can use the lazy loading method that certain parts of the application are just loaded when you need them aspacily when you import them

//you can import loades and actions dynamicly and also components

import { lazy, Suspense } from "react";
import pagexy, { loader } from "./page/pagexy";

//module is the file loaded from the import path

const BlogPage = lazy(() => import("./pages/pagexy"));

const router = [
  {
    path: "/",
    loader: (meta) => import("./page/pagexy").then((module) => module.loader(meta)),
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <BlogPage />
      </Suspense>
    ),
    //now the element and the loader are only called when visting the site, without downloading every bit for the client when not everything is used
  },
  {},
  {},
];
