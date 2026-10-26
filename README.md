# SAHCAB

Sitio web de SAHCAB, construido con [Astro](https://astro.build).

## Desarrollo

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
```

El resultado queda en `dist/`.

## Estructura

- `src/pages/` — páginas del sitio
- `src/components/` — componentes reutilizables
- `src/data/site.ts` — textos, datos de contacto y servicios
- `src/styles/global.css` — estilos globales
- `public/` — imágenes y favicon

## Pendientes del cliente (segunda fase)

Mientras no lleguen, el sitio no publica datos de contacto directos y atiende sólo por formulario
(Netlify Forms, formulario `contacto`; las notificaciones se configuran en el panel de Netlify).

- Razón social y nombre comercial confirmados → `site.legalName` en `src/data/site.ts` y aviso de privacidad.
- Domicilio, teléfono y correo con dominio propio → `site.email`, `site.phone` en `src/data/site.ts`.
- Fotos reales de trabajos (mantenimiento, instalaciones, obra, herramientas, equipo con EPP; antes y después).
  Hasta entonces las fotos de banco van rotuladas como «Imagen ilustrativa» (componente `Photo`).
- Aviso de privacidad revisado por el área legal: los huecos están marcados como `[… PENDIENTE]`
  en `src/data/aviso-de-privacidad.html`.
- Certificaciones (REPSE, STPS, ISO, etc.): no se muestran hasta contar con soporte documental.
