# Proyectos Web

Landing page para mostrar los proyectos web del curso de Desarrollo de Software y Tecnología.

## Tecnologías

- **Vite** + **React** (JavaScript)
- **Tailwind CSS** v4.3
- **Lucide React** (iconos)
- Google Fonts (Inter)

## Características

- Diseño limpio y minimalista
- Tema CSS con variables de color (azul marino + blanco)
- Visualización de proyectos con imagen, descripción, integrantes y enlaces
- Filtros por categoría y año (píldoras)
- Datos cargados desde `public/data.json`
- Favicon con icono `</>` (Code2)
- Responsive design

## Proyectos

Los proyectos se definen en `public/data.json` con la siguiente estructura:

```json
{
  "id": 1,
  "nombre": "Nombre del proyecto",
  "descripcion": "Descripción del proyecto",
  "imagen": "nombre-archivo.jpg",
  "categoria": "Frontend",
  "anio": 2025,
  "integrantes": ["Nombre1", "Nombre2"],
  "url": "https://demo.vercel.app",
  "github": "https://github.com/usuario/repo"
}
```

Las imágenes se colocan en `public/images/`.

## Scripts

```bash
npm run dev      # desarrollo
npm run build    # build producción
npm run preview  # previsualizar build
```
