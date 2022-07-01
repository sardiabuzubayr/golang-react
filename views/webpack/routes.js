import React from 'react';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Profile = React.lazy(() => import('./components/Profile'));

const routes = [
  { path: '/', exact: true, name: 'Home', component:Dashboard},
  { path: 'dashboard', name: 'Dashboard', component: Dashboard },
  { path: 'profile', name: 'Profile', component: Profile },
  
];

export default routes;
