import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};

export const AppConfig = {
  footer: {
    siteName: 'Loja de Cursos Online',
    contactEmail: 'contato@lojadecursos.com',
    links: [
      { name: 'Sobre nós', url: '/sobre' },
      { name: 'Contato', url: '/contato' },
      { name: 'Política de Privacidade', url: '/privacidade' }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/lojadecursos',
      facebook: 'https://facebook.com/lojadecursos'
    }
  }
};
