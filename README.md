## clean-architecture-ts

Un esqueleto de proyecto TypeScript con estructura de "clean architecture" preparado para desarrollo local y pruebas con Vitest.

Este README cubre cómo poner en marcha el proyecto, ejecutar las pruebas, realizar el typecheck y una breve referencia a la función trivial `healthCheck` añadida en `src/shared/health.ts`.

## Requisitos

- Node 18+ (se recomienda 18 o superior) y npm.
- TypeScript y dependencias se instalan desde `devDependencies` (el proyecto ya las listará en `package.json`).

## Instalación

Instala las dependencias con:

```bash
npm install
```

## Scripts útiles

- `npm run dev` — ejecuta `tsx main.ts` (entorno de desarrollo rápido; `main.ts` actualmente está vacío y puedes usarlo como punto de entrada).
- `npm test` — ejecuta la suite de tests con Vitest (`vitest run`).
- `npx tsc --noEmit` — corre el typechecker de TypeScript sin emitir archivos.

Ejemplo rápido:

```bash
npm install
npm test
npx tsc --noEmit
```

## Estructura principal del proyecto

Directorio de alto nivel relevante:

- `src/` — código fuente TypeScript.
  - `application/`, `domain/`, `infrastructure/`, `shared/` — organización por capas (clean architecture).
  - `src/shared/health.ts` — contiene una función trivial `healthCheck()` usada por los tests de ejemplo.
- `test/` — tests (Vitest). Los tests de ejemplo están en `test/shared/health.spec.ts`.
- `main.ts` — punto de entrada para ejecutar en modo `dev`.

## Sobre `healthCheck`

Se añadió una función trivial en `src/shared/health.ts`:

- `healthCheck(): { ok: boolean; uptime: number; timestamp: string }` — devuelve un objeto simple que indica que la aplicación está OK, el `uptime` del proceso (si está disponible) y un `timestamp` en formato ISO.

Esto se creó principalmente como prueba de integración ligera para asegurar que el entorno de testing y el arranque funcionan correctamente.

## Notas sobre TypeScript y ESM

El proyecto está configurado en modo ESM (`package.json` contiene `"type": "module"`) y `tsconfig.json` usa `module: "nodenext"`.

También se añadió `"types": ["node"]` en `tsconfig.json` para que las APIs de Node (como `process`) estén tipadas correctamente.

Si prefieres CommonJS en vez de ESM, tendrás que ajustar `package.json` y/o `tsconfig.json` en consecuencia.

## Ejecutar tests en watch (desarrollo)

Puedes ejecutar Vitest en modo watch con:

```bash
npx vitest --watch
```

## Contribuir

- Añade tests para nuevas funciones en `test/`.
- Mantén la separación por capas (application/domain/infrastructure/shared).

## Contacto y seguimiento

Si quieres que añada checks de salud más avanzados (comprobación de DB, colas, servicios externos, etc.) o integración continua (GitHub Actions), dímelo y lo preparo.

---

Generado automáticamente: contiene instrucciones mínimas para arrancar, testear y entender la función `healthCheck` añadida.
