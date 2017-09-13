import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HelpComponent} from './components/help/help.component';
import { ModalComponent } from './components/modalWindow/modalWindow.component';
import { DataListComponent }        from './components/dataList/dataList.component';
import { PaginationService } from './services/paginationService'

const routes = [{path:'', component:DataListComponent}, {path:'help', component:HelpComponent}];

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    ModalComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
