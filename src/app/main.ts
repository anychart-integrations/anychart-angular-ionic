import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'anychart/dist/js/anychart-base.min.js';

platformBrowserDynamic().bootstrapModule(AppModule);
