/* Divisor de ola entre secciones (SVG). bg = color de la seccion de arriba,
   fill = color de la seccion de abajo, path = curva. */
export function Wave({ bg, fill, path, height = 60 }) {
  return (
    <div className="wave" style={bg ? { background: bg } : undefined}>
      <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" style={{ height: `${height}px` }}>
        <path d={path} fill={fill} />
      </svg>
    </div>
  )
}
