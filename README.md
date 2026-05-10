# 🏗️ TypeScript Clean Architecture Blueprint

Un ecosistema profesional diseñado bajo los principios de **Clean Architecture**, optimizado para escalabilidad, testabilidad y tipado estricto. Este repositorio demuestra cómo separar las reglas de negocio de los detalles técnicos, permitiendo un mantenimiento sostenible a largo plazo.

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Clean_Architecture-4CAF50?style=for-the-badge" />
</p>

---

## 🎯 Propósito del Proyecto
Demostrar una implementación real de arquitectura por capas. El objetivo es cumplir la **Regla de Dependencia**: el código solo depende de capas más internas (hacia el Dominio). Esto protege la lógica de negocio frente a cambios en bases de datos, frameworks de UI o APIs externas.

## 🏛️ Organización por Capas



- **`src/domain/`**: **Entidades y Contratos.** Contiene la lógica de negocio pura y las interfaces (Repositorios) que definen cómo se deben comportar los datos sin saber *dónde* se guardan.
- **`src/application/`**: **Casos de Uso.** Orquesta el flujo de información. Es el cerebro que utiliza los repositorios para ejecutar acciones específicas (ej: `CreateUserUseCase`).
- **`src/infrastructure/`**: **Detalles Técnicos.** Implementaciones concretas de los contratos del dominio (ej: `InMemoryUserRepository`). Aquí es donde reside la tecnología volátil.
- **`src/shared/`**: **Utilidades Transversales.** Lógica común y monitoreo de salud del sistema.

---

## 🚀 Implementación de Referencia
El proyecto incluye un flujo completo de **Gestión de Usuarios** para ejemplificar el desacoplamiento:

1. **Definición de Contrato**: La interfaz `UserRepository` vive en el Dominio.
2. **Lógica de Orquestación**: El caso de uso en la capa de Aplicación inyecta el repositorio para procesar la creación de usuarios.
3. **Persistencia Plug-and-Play**: La implementación en la Infraestructura es intercambiable sin afectar la lógica superior.

---

## 🛠️ Comandos Rápidos

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instalación de dependencias y entorno ESM. |
| `npm run dev` | Ejecución del punto de entrada con `tsx`. |
| `npm test` | Suite de pruebas unitarias e integración con **Vitest**. |
| `npx tsc --noEmit` | Validación de tipos de TypeScript. |

---

## 🧪 Estrategia de Calidad
- **Tests Unitarios**: Validación de Casos de Uso mediante mocks de repositorios.
- **Testing Moderno**: Suite configurada con Vitest para máxima velocidad en entornos ESM.
- **Type-Safety**: Uso estricto de TypeScript para prevenir errores en tiempo de diseño.

---

## 👨‍💻 Autor
**Jose Obando** - Senior Mobile Solutions Architect.
Especialista en arquitecturas móviles nativas e híbridas con enfoque en escalabilidad empresarial.

---
> *Este repositorio es una base técnica para arquitecturas modernas desacopladas.*
