import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { LoginService } from "./login/login.service";
import { RegisterComponent } from "./register/register/register.component";
import { DrillLevel1Component } from "./dashboard/drillboard/drill-level1/drill-level1.component";
import { DrillLevel2Component } from "./dashboard/drillboard/drill-level2/drill-level2.component";
import { DrillLevel3Component } from "./drill-level3/drill-level3.component";
//import { AuthGuard } from './guards/auth.guard';
//import { OperationsDashBoardComponent } from './operations-dashboard/operations-dashboard.component';
//import { DrillViewComponent } from './drill-level/drill-view/drill-view.component';

const appRoutes: Routes = [


    { path: 'login', component: LoginComponent },
    
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent, children: [{
            path: 'drill1',
            component: DrillLevel1Component ,children:[{
                path: 'drill2',
                component: DrillLevel2Component,
               /// outlet: 'drill',

            },{
                path: 'drill3',
                component: DrillLevel3Component,

            }],
           // outlet: 'drill'
        },
        
           

        ]
    },
    {
        path: 'register',
        component: RegisterComponent
    }



    // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);