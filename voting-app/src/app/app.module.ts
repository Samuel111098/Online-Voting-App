import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PostcardComponent } from './postcard/postcard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		HomeComponent,
		LoginComponent,
		SearchComponent,
		PostcardComponent,
		AdmindashboardComponent,
		CreateComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		NgxPaginationModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
