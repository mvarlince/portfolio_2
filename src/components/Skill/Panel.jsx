import { Image } from "../../utilis/Bootstrap.jsx";


export default function Panel( {iconName} ) {

  return (
    <>
    <Image
      src={`/icons/${iconName}.png`}
      className="button-effect"
      style={{display: "inline-block", width: "100px"}} />
    </>
  );
}