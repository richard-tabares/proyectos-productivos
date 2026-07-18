# Contexto de cambios

## 2026-07-18 — Botón de descarga Word en cards

- **`public/data.json`**: Agregado campo `wordFile` a los 7 proyectos (ej: `"turuta.docx"`)
- **`public/files/`**: Directorio nuevo con 7 archivos `.docx` placeholder
- **`src/components/ProjectCard.jsx`**: Nuevo botón "Proyecto" con icono `FileDown` y atributo `download`; ajustados padding, gap y tamaño de iconos para que los 3 botones quepan en una fila (`flex-nowrap`, `text-xs`, `px-3 py-1.5`, iconos 14px)
