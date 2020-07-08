import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { hmrModule } from '@angularclass/hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  // @ts-ignore
  if (module.hot) {
    bootstrap()
      .then((ngModuleRef) => {
        // @ts-ignore
        return hmrModule(ngModuleRef, module);
      })
      .catch((err) => console.error(err));
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.error('Are you using the --hmr flag for ng serve?');
  }
} else {
  document.addEventListener('DOMContentLoaded', () => {
    bootstrap().catch((err) => console.error(err));
  });
}
