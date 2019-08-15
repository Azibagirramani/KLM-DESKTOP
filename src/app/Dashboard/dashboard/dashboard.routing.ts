import { Routes } from '@angular/router';

import { HomeComponent } from "../../Components/home/home.component";
import { UsageAndStatsComponent} from "../../Components/usage-and-stats/usage-and-stats.component";
import { FaqComponent } from "../../Components/faq/faq.component";
import { KlmGoComponent } from "../../Components/klm-go/klm-go.component"
import { GoStaffComponent } from '../../Components/go-staff/go-staff.component'
export const dashboardRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'usage', component: UsageAndStatsComponent
    },
    {
        path: 'faq', component: FaqComponent
    },
    {
        path: 'go', component: KlmGoComponent
    },
    {
        path: 'staff', component: GoStaffComponent
    }
]