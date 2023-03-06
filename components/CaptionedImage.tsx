import {ReactNode} from 'react';


// Renders an image with an accompanying caption.
// Pass the caption as children, and the image `src` and `alt` as props.
export type CaptionedImageProps = {src: string, alt: string, className?: string, children: ReactNode};
export default function CaptionedImage(props: CaptionedImageProps) {
    const {children, className, ...imageProps} = props;

    return (
        <div className={className}>
            <img
                {...imageProps}
                className="rounded w-full mb-2"
            />
            <p className="text-sm text-secondary italic">{children}</p>
        </div>
    )
}
