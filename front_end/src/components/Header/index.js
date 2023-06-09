import { HeaderStyled, ListStyled, ItemStyled, LogoStyled } from "./styles"
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Header() {
    return (

        <HeaderStyled>
            <ListStyled>
                <ItemStyled><i><MdMenu size={30} /></i></ItemStyled>

               <Link to="/"><LogoStyled>Comart</LogoStyled></Link>

                <ItemStyled>
                    <Link to ="/favoritos"><BsFillSuitHeartFill size={25} /></Link>
                    <Link to="/login"><BsFillPersonFill size={25} /></Link>
                </ItemStyled>

            </ListStyled>
        </HeaderStyled>
    )
}