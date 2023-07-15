import CaptionedImage, {CaptionedImageProps} from '../../../components/CaptionedImage';


// Renders a wrapper around the captioned images in the mentor interview pages.
// Pass the caption as children, and the image `src` and `alt` as props.
// TODO: does this component need to exist?
export default function MentorImage(props: CaptionedImageProps) {
    return <CaptionedImage {...props} className="w-full max-w-3xl mb-8 mx-auto" />
}
