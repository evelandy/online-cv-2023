import IRoute from "../interfaces/route";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import ProjectsPage from "../pages/Projects";
import ExperiencePage from "../pages/Experience";
import HomePage from "../pages/Home";

const routes: IRoute[] = [
  {
    path: '/',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: '/projects',
    name: 'Projects Page',
    component: ProjectsPage,
    exact: true
  },
  {
    path: '/experience',
    name: 'Experience Page',
    component: ExperiencePage,
    exact: true
  },
  {
    path: '/contact',
    name: 'Contact Page',
    component: ContactPage,
    exact: true
  },
  // {
  //   path: '/education/:number',
  //   name: 'Education Page',
  //   component: EducationPage,
  //   exact: true
  // },
]

export default routes;