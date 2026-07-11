function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const value = parseInt(clean, 16)
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255]
}

function rgbToHex([r, g, b]: [number, number, number]): string {
  return `#${[r, g, b]
    .map((c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0'))
    .join('')}`
}

export function mixWithBlack(hex: string, ratio: number): string {
  const [r, g, b] = hexToRgb(hex)
  return rgbToHex([r * (1 - ratio), g * (1 - ratio), b * (1 - ratio)])
}
