import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'anychart/dist/anychart-bundle.min.js';

platformBrowserDynamic().bootstrapModule(AppModule);
