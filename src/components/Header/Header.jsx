import { HeaderContainer } from "./Header.styled";

export function Header(){
    return (
        <HeaderContainer>
            <span onClick={() => window.scroll(0, 0)}>All movies here 🎥</span>
        </HeaderContainer>
    )
};