// filename = gallery_01
// format = jpeg | webp
// option = c_fill, w_400

function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dioj2hqko/image/upload/${option}/v1714454439/${format}/${filename}.${format}`
}

export default generateImageUrl
