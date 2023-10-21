import { createBrowserRouter } from 'react-router-dom';
import PublicComponent from '../core/layouts/public/public.component';
import HomeComponent from '../pages/home/home.component';
import { Routes } from './routes';
import NotFound from '../pages/not-found/notfound.component';
import WeatherComponent from 'pages/weather-app/weather.component';

const router = createBrowserRouter(
  [
    {
      element: <PublicComponent />,
      children: [
        {
          path: Routes.default,
          element: <WeatherComponent />,
        },
      ],
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename: '/' }
);

export default router;
