import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const svgPath = path.join(root, 'public', 'favicon-brand.svg')
const outIco = path.join(root, 'public', 'favicon.ico')

const svg = fs.readFileSync(svgPath)
const sizes = [16, 32, 48]
const pngBuffers = await Promise.all(
  sizes.map((s) => sharp(svg).resize(s, s).png().toBuffer()),
)
const ico = await pngToIco(pngBuffers)
fs.writeFileSync(outIco, ico)
console.log('Wrote', outIco)
