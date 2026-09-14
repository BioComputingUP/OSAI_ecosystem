import { provideZoneChangeDetection } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';

// Angular 21+ is zoneless by default; this app relies on zone.js to re-render after HTTP loads
platformBrowser().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()] })
  .catch(err => console.error(err));
