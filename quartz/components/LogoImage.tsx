import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const LogoImage: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:8080" : `https://${cfg.baseUrl}`; 
    const source = `${baseUrl}/static/hardwarerpg-logo.png`;
    return <img style="color: #fff;"src={source}></img>
  }
 
  return LogoImage
}) satisfies QuartzComponentConstructor
