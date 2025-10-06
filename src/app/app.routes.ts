import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layot } from './pages/layot/layot';
import { Dashboard } from './pages/dashboard/dashboard';
import { Department } from './pages/department/department';
import { Parentcategory } from './pages/parentcategory/parentcategory';
import { Childcategory } from './pages/childcategory/childcategory';
import { Employee } from './pages/employee/employee';
import { Newticket } from './pages/newticket/newticket';
import { TicketList } from './pages/ticket-list/ticket-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layot,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'department',
        component: Department,
      },
      {
        path: 'parent-category',
        component: Parentcategory,
      },
      {
        path: 'child-category',
        component: Childcategory,
      },
      {
        path: 'employee',
        component: Employee,
      },
      {
        path: 'new-ticket',
        component: Newticket,
      },
      {
        path: 'ticket-list',
        component: TicketList,
      },
    ],
  },
];
