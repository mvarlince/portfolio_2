import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import { BsFillPersonLinesFill} from "react-icons/bs"

export default function SocialLinks(){
    const links = [
        {id: 1,
        child:(
            <>
            Linkedin <FaLinkedin size={30} />
            </>
            ),   
        href:'https://www.linkedin.com/in/varlince',
        style: 'rounded-tr-md'
        },
//
        {id: 2,
            child:(
                <>
                Github <FaGithub size={30} />
                </>
                ),   
        href:'https://www.github.com/mvarlince',
            },
//
        {id: 3,
            child:(
                <>
                Mail <HiOutlineMail size={30} />
                </>
                ),   
        href:'mailto:varlincemeran@gmail.com',
            },
//           
        {id: 4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
                ),   
        href: 'Valince_Meran_Resume_2023.pdf',
        style: 'rounded-br-md',
        download: true
            }
    ]

    return(
        <>
    <div className="d-none d-lg-flex flex-column top-35 start-0 position-fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              `d-flex justify-content-between align-items-center w-100 h-100 px-3 ms-5 rounded-md bg-gray-500 ${style}`
            }
          >
            <a
              href={href}
              className="d-flex justify-content-between align-items-center w-100 text-white
              "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}