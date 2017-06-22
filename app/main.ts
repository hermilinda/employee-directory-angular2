import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS}   from 'angular2/router'
import {FORM_PROVIDERS}     from 'angular2/common';

bootstrap(AppComponent, [HTTP_PROVIDERS , ROUTER_PROVIDERS , FORM_PROVIDERS]);
