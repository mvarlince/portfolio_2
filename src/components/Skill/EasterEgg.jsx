import { Image } from "../../utilis/Bootstrap.jsx";

export default function EasterEgg( {iconName} ) {

  return (
    <a
      href=""
      target="_blank"
      className="easter-egg"
      rel="noreferrer">
        <Image 
          src={`/icons/${iconName}.svg`}
          fluid
          className="button-effect"
          style={{display: "inline-block", width: "100px"}} />
    </a>
  )

}