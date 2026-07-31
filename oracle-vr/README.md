# Oracle VR — Consola Social

App social de avatares construida sobre el sistema de diseño "Oracle VR" (paquete Stitch subido al proyecto). Incluye feed tipo Instagram/Facebook (fotos, likes, comentarios), un módulo de descubrimiento tipo Tinder para conocer a otros avatares, un mercado de mundos VR y un panel de perfil con puente hacia Discord, VRChat, Unity y Blender.

**Demo en vivo (funciona ahora mismo, sin instalar nada):**
Publicada como Artifact de Claude — pide el enlace en la conversación si lo perdiste, o abre `index.html` de esta carpeta en cualquier navegador.

## Qué incluye

- **Feed** — publica texto y fotos (se comprimen y guardan como imagen local), da like, comenta.
- **Conectar** — tarjetas deslizables (drag real con puntero, más botones ✕ / ★ / ♥) entre avatares con match probabilístico; los matches quedan listados y también sirven para coordinarse en **Salas**.
- **Mercado de mundos** — catálogo de instancias VR (NYX Night Realm, Black Diamond, Neon Harbor, Fantasy Isles, Creator Lab) con insignia de plataforma (VRChat/Unity), estado de verificación y ficha de detalle.
- **Salas & eventos** — encuentros programados por mundo donde los avatares "conviven" (unirse/salir).
- **Perfil** — edición de identidad, insignias de Discord/VRChat, adjuntar avatar 3D (.vrm/.glb/.fbx/.blend) y el **Puente de tecnología** (ver abajo).
- Exportar tu perfil a JSON, todo persistido en `localStorage` del navegador.

## Qué es real y qué es demo (léelo antes de prometer nada a usuarios)

Esta app corre 100% en el navegador — no tiene servidor propio ni base de datos compartida. Eso la hace instantánea y desplegable en cualquier sitio estático, pero implica:

| Integración | Estado en esta app | Cómo se vuelve real |
|---|---|---|
| **Feed / likes / comentarios / matches** | Persistidos en `localStorage`, solo visibles para ti en este navegador | Backend con base de datos + auth (ver "Siguiente paso") |
| **Discord** | El botón "Generar payload" arma el JSON exacto que espera un *webhook* de Discord, con botones para copiar el JSON o el comando `curl`. También puedes descargar un **workflow de n8n** (`oracle-vr-discord-bridge.n8n.json`) listo para importar: recibe un webhook y reenvía el post a tu servidor de Discord. Discord sí tiene una API real (OAuth2 + Webhooks); lo único que falta es un backend que dispare esas llamadas. | Desplegar el workflow n8n (este mismo repo ya usa n8n) o un endpoint propio que llame al webhook en el servidor |
| **VRChat** | No tiene API pública para automatizar login, subida de avatares o de mundos — siempre pasa por su cliente oficial y el Unity SDK3. Los enlaces "Abrir VRChat ↗" llevan al sitio oficial. | No automatizable; es una limitación de la plataforma, no de esta app |
| **Unity / Blender** | Son herramientas de escritorio. La app acepta y etiqueta archivos `.vrm/.glb/.fbx/.blend` como metadatos del perfil, y se puede descargar una guía real del pipeline **Blender/Unity → VRM → VRChat**. | El modelado y build siguen ocurriendo fuera del navegador; lo que sí se puede hacer en web es previsualizar `.vrm`/`.glb` con `@pixiv/three-vrm` + three.js |

## Siguiente paso: backend multiusuario real

Para que el feed, los matches y las salas se compartan entre personas de verdad, hace falta:

1. **API + base de datos** (por ejemplo Node/Express + Postgres, o Supabase/Firebase) para perfiles, posts, likes, comentarios, swipes y salas.
2. **Auth** — login con Discord OAuth2 es el más natural dado el puente ya construido.
3. **Storage de imágenes** (S3-compatible) en vez de `localStorage`.
4. **Hosting** (Vercel/Render/Railway/Fly.io) + dominio.

El frontend de este `index.html` está pensado para migrarse fácilmente: el objeto `state` centraliza todos los datos y `save()`/`load()` son los dos únicos puntos que hay que cambiar por llamadas a una API real.

## Cómo correrlo localmente

```bash
cd oracle-vr
python3 -m http.server 8080
# abre http://localhost:8080
```

Es un único archivo HTML autocontenido (CSS y fuentes embebidas), así que también funciona abriéndolo directo con doble clic.

## Origen del diseño

El sistema visual ("Deep Space" + cian eléctrico `#00F2FF` + púrpura neón `#BC00FF`, tipografías Sora/Geist/JetBrains Mono) viene del paquete `stitch_oracle_vr_integrated_ecosystem` subido al proyecto, incluyendo los nombres de operadores (Shiro, Melishina, Samy) y mundos (NYX Night Realm, Black Diamond, Neon Harbor, Fantasy Isles, Creator Lab) usados como contenido semilla.
