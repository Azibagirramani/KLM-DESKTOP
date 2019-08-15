//internal libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

//external libraries
import { ChartsModule } from 'ng2-charts';
import { MatTableModule,   } from '@angular/material/table';
import { MatButtonModule, MatIconModule} from "@angular/material";
import { MatTabsModule} from '@angular/material/tabs';
import { dashboardRoutes } from "./dashboard.routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

//components
import { HomeComponent } from "../../Components/home/home.component";
import { UsageAndStatsComponent } from "../../Components/usage-and-stats/usage-and-stats.component";
import { FaqComponent } from "../../Components/faq/faq.component";
import { KlmGoComponent } from '../../Components/klm-go/klm-go.component'
import { BarChartComponent } from '../../Components/Charts/bar-chart/bar-chart.component'
import { LineChartComponent } from '../../Components/Charts/line-chart/line-chart.component'
import { PendingComponent } from '../../Components/Tables/pending/pending.component'
import { CounterComponent } from '../../Components/Tables/counter/counter.component';
import { GoStaffComponent } from '../../Components/go-staff/go-staff.component';
import { MapComponent } from '../../Components/map/map.component'
import { GoStaffTableComponent } from '../../Components/Tables/go-staff-table/go-staff-table.component'
import { GoAdminsComponent  } from '../../Components/Tables/go-admins/go-admins.component'
import { NetworkComponent } from '../../Components/network/network.component'
import { GroupComponent } from '../../Components/usage-and-stats/group/group.component'
import { LuggageComponent } from '../../Components/usage-and-stats/luggage/luggage.component'
import { PetsComponent } from '../../Components/usage-and-stats/pets/pets.component'
import { UmnrsComponent } from '../../Components/usage-and-stats/umnrs/umnrs.component'
import { PolarChartComponent } from '../../Components/Charts/polar-chart/polar-chart.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsageAndStatsComponent,
    FaqComponent,
    KlmGoComponent,
    BarChartComponent,
    LineChartComponent,
    PendingComponent,
    CounterComponent,
    GoStaffComponent,
    MapComponent,
    GoAdminsComponent,
    GoStaffTableComponent,
    NetworkComponent,
    GroupComponent,
    LuggageComponent,
    PetsComponent,
    UmnrsComponent,
    PolarChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgbModule,
    FormsModule,
    ChartsModule,
    MatTableModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey:String ['AIzaSyDYvS6Odfsd8GXp_M7ktI9aoBGwuyTynAg']
    }),
    AgmSnazzyInfoWindowModule,
    MatTabsModule,
    MatIconModule,
    LeafletModule.forRoot()
  ],

})
export class DashboardModule { }
