import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { GetStockStatusComponent } from './get-stock-status/get-stock-status.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ShowLocationComponent } from './show-location/show-location.component';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { TxnHistoryComponent } from './txn-history/txn-history.component';
import { FilterPipe } from './filter.pipe';
import { HighLightDirective } from './high-light.directive';
import { CreateHeaderDirective } from './create-header.directive';
import { ManageDoctorsComponent } from './manage-doctors/manage-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    ShowStockComponent,
    GetStockStatusComponent,
    FeedBackComponent,
    LoginComponent,
    LogoutComponent,
    DataGridComponent,
    DropDownComponent,
    ShowLocationComponent,
    SearchHospitalComponent,
    TxnHistoryComponent,
    FilterPipe,
    HighLightDirective,
    CreateHeaderDirective,
    ManageDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  entryComponents: [ShowLocationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
