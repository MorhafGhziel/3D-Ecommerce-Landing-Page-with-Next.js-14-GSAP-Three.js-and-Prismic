import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid">
        <PrismicRichText field={slice.primary.heading} />
        <PrismicRichText field={slice.primary.subheading} />
        <PrismicRichText field={slice.primary.body} />
        {slice.primary.button_text}
        <PrismicNextLink field={slice.primary.button_link}></PrismicNextLink>
        <PrismicNextImage field={slice.primary.cans_image} />
        <PrismicRichText field={slice.primary.second_heading} />
        <PrismicRichText field={slice.primary.second_body} />
      </div>
    </Bounded>
  );
};

export default Hero;
