// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/home/thread-history',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      },
      {
        path: 'home/thread-history',
        loadComponent: () => import('./thread-history-list/thread-history-list.component').then((c) => c.ThreadHistoryListComponent)
      },
      {
        path: 'home/new-thread',
        loadComponent: () => import('./new-thread/new-thread.component').then((c) => c.NewThreadComponent)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./checkout-page/checkout-page.component').then((c) => c.CheckoutPageComponent)
      },
      {
        path: 'payment',
        loadComponent: () => import('./payments/payments.component').then((c) => c.PaymentsComponent)
      },
      {
        path: 'payment-result',
        loadComponent: () => import('./payment-result/payment-result.component').then((c) => c.PaymentResultComponent)
      },
      {
        path: 'view-thread',
        loadComponent: () => import('./view-thread/view-thread.component').then((c) => c.ViewThreadComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
