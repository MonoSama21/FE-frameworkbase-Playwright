# FE-frameworkbase-Playwright 🎭
Codificación de framework base para pruebas automatizadas de frontend

## 🌐 Plataforma Web (GitHub Pages)

Accede a la plataforma completa en: **https://[tu-usuario].github.io/[tu-repo]/**

### 📂 Estructura de URLs:
- **Página Principal**: `https://[tu-usuario].github.io/[tu-repo]/`
  - 🚀 Plataforma de ejecución de tests
  - 📊 Visualización del historial
  - 📈 Estadísticas y filtros
  
- **Reporte Playwright**: `https://[tu-usuario].github.io/[tu-repo]/report`
  - 📄 Reporte HTML detallado de la última ejecución
  - 🎥 Videos de los tests ejecutados
  - 📸 Screenshots y traces

### Características de la Plataforma:
- ✅ **Ejecutar Pruebas**: Lanza pruebas directamente desde el navegador
- 📊 **Historial Completo**: Ve todas las ejecuciones pasadas con detalles
- 📈 **Estadísticas**: Total de ejecuciones, exitosas y fallidas
- 🔍 **Filtros**: Filtra por estado (todas, exitosas, fallidas)
- 🔗 **Acceso directo**: Links a reportes y GitHub Actions

### Configuración Inicial:
1. Abre [test-launcher.html](test-launcher.html) líneas 409-410
2. Cambia `GITHUB_OWNER` y `GITHUB_REPO` por tus datos
3. Genera un [GitHub Token](https://github.com/settings/tokens/new?scopes=repo,workflow)
4. Commit y push los cambios
5. ¡Listo! La página se publicará automáticamente en GitHub Pages

---

## 📧 Notificaciones Mejoradas

Los correos incluyen:
- ✨ Diseño profesional con gradientes
- 📊 Tablas visuales de resultados
- 🎨 Colores dinámicos (verde=éxito, rojo=fallo)
- 🔗 Links directos a reportes y artefactos

---

## 🧪 Ejecución Manual

```bash
# Por tag específico
npm run test -- --grep "@Escenario37"

#PARA EJECUTAR CON NAVEGADOR
npm run test:headed
npm run test:headed -- --grep "@test"

# Todos los tests
npm run test


$env:TEST_ENVIRONMENT="integracion"; npm run test:headed -- --grep "@DailyTest"

# Integración con tag específico
$env:TEST_ENVIRONMENT="integracion"; npm test -- --grep "@DailyTest"

# Certificación con escenario específico
$env:TEST_ENVIRONMENT="certificacion"; npm test -- --grep "@Escenario37"


```

---

## 📊 Historial Automático

Cada ejecución se registra automáticamente en `history.json` incluyendo:
- Tag ejecutado
- Resultados (passed/failed/skipped)
- Duración
- Fecha y hora
- Build number
- Usuario que ejecutó
- Links a reportes

El historial mantiene las últimas **50 ejecuciones**.

---

**QA Automation SSr Yrvin Pachas** • SIASIS Platform 🤖
