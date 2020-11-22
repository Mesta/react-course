import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const images = props.images.map(
    (image) => {
      const { description, id, urls } = image
      return <ImageCard
        alt={description}
        key={id}
        src={urls.regular}
      />
    }
  )

  return <div className="image-list">{images}</div>
}

export default ImageList
