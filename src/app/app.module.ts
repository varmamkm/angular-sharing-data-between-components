import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './sharingdata-using-input/parent/parent.component';
import { ChildComponent } from './sharingdata-using-input/child/child.component';
import { Parent1Component } from './sharingdata-using-viewchild/parent/parent.component';
import { Child1Component } from './sharingdata-using-viewchild/child/child.component';
import { RouterModule, Routes }  from '@angular/router';
import { Parent2Component } from './sharingdata-using-output/parent2/parent2.component';
import { Child2Component } from './sharingdata-using-output/child2/child2.component';
import { Parent3Component } from './sharingdata-using-service/parent3/parent3.component';
import { Child3Component } from './sharingdata-using-service/child3/child3.component';
import { DataService } from "./sharingdata-using-service/data.service";

const appRoutes: Routes = [
  { path: 'usinginput', component: ParentComponent },
  { path: 'usingviewpoint', component: Parent1Component },
  { path: 'usingoutput', component: Parent2Component },
  { path: 'usingservice', component: Parent3Component }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes) 
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ParentComponent, 
    ChildComponent,
    Parent1Component, 
    Child1Component, 
    Parent2Component, 
    Child2Component, Parent3Component, Child3Component 
    ],
  bootstrap:    [ 
    AppComponent 
    ],
  providers:[
    DataService
  ]
})
export class AppModule { }
