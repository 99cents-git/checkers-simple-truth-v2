interface HomeCard {
  id: number
  cardProportion: number
  hasPrice?: boolean
  hasCTA?: boolean
  hasImage?: boolean
  imagePath?: string
  priceRands?: number
  priceCents?: number
  headerText?: string
  subheaderText?: string
  descriptionText?: string
  ctaText?: string
  allergenText?: string
  includedText?: string
  neededText?: string
  videoLink?: string
  flash?: string
  sidebarHeading?:string
}
