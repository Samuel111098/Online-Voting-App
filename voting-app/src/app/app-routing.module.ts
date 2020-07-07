import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
	{
		component: DashboardComponent,
		path: 'dashboard'
	},
	{
		component: DashboardComponent,
		path: 'dashboard/:id'
	},
	{
		component: HomeComponent,
		path: ''
	},
	{
		component: LoginComponent,
		path: 'login'
	},
	{
		component: AdmindashboardComponent,
		path: 'admin'
	},
	{
		component: CreateComponent,
		path: 'create'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
