import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import {
  JwPaginationComponent,
  JwPaginationModule,
} from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [NavbarComponent, ManagementComponent],
  imports: [CommonModule, ManagementRoutingModule, NgxPaginationModule,MatTabsModule],
})
export class ManagementModule {}
