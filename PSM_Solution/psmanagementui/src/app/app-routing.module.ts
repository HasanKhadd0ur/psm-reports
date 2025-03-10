import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './shared/sharedLayout/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CustomerListComponent } from './customers/pages/customer-list/customer-list.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { ProjectFAQComponent } from './pages/project-faq/project-faq.component';
import { PsmStartComponent } from './pages/psm-start/psm-start.component';

export const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'Project-FAQ',
        component: ProjectFAQComponent,
        
      },
      {
        path: 'Help',
        component: PsmStartComponent,
        
      },
      {
        path: '',
        component:HomeComponent  ,
        pathMatch: "full"
      }    ,
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      }
     , {
      path: 'projects',
      loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      
      }
      , {
        path: 'employees',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
      } 
      , {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }
      
      , {
        path: 'tracks',
        loadChildren: () => import('./tracks/tracks.module').then(m => m.TracksModule)
      }
      , {
        path: 'types',
        loadChildren: () => import('./projects-types/projects-types.module').then(m => m.ProjectsTypesModule)
      }
    ]
  }
  ,
  {
    path: '**',
    component:PageNotfoundComponent  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
