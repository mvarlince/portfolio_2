import { Col, Image } from "react-bootstrap";

export default function Panel({element}){
    return(
        <>
         <Col className="text-center" >
            <a
             href={element.url}
            target="_blank"
            rel="noreferrer">
                <Image 
                src={`/icons/${element.icon}`}/>
            </a>
            <p className="text-white"> {element.name} </p>
          </Col>
        </>
    )
}