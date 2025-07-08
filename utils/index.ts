import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(__filename)

const resolve = (filePath: string) => path.resolve(__dirname, filePath)

export {
  resolve
}