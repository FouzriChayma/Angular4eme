import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Module2Module } from './app/module2/module2.module';


platformBrowserDynamic().bootstrapModule(Module2Module)
  .catch(err => console.error(err));
