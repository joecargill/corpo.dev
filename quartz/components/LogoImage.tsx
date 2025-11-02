import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const LogoImage: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:8080" : cfg.baseUrl; 
    const source = `${baseUrl}/static/developedbycorpo-white.png`;
    return <img src={source}></img>
  }
 
  return LogoImage
}) satisfies QuartzComponentConstructor
