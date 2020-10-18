import Image from "../models/Image"

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://SEU_ENDEREÇO_IP:3333/uploads/${image.path}`
    }
  },
  renderMany(images: Image[]) {
    return images.map(Image => this.render(Image))
  }
}
