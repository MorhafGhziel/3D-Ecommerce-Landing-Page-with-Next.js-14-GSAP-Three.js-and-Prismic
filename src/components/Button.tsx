import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { LinkField, asText } from "@prismicio/client";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  return <PrismicNextLink field={buttonLink}>{buttonText}</PrismicNextLink>;
}
