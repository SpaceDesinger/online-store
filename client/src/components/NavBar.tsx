import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useStores} from "@/hooks/useStores.ts";
import {observer} from "mobx-react-lite";
import {ROUTES} from "@/utils/constants/routes.ts";

const NavBar = observer(() => {
    const {user} = useStores()
    const navigation = useNavigate()

    const logOut = () => {
        user.setUser(null)
        user.setIsAuth(false)
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to={'/'} style={{color: 'black'}}>Device Shop</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Nav className="ml-auto">
                    {user.isAuth ?
                        <>
                            <Button variant={"outline-dark"} className="me-2"
                            onClick={() => navigation(ROUTES.ADMIN)}
                            >Админ панель</Button>
                            <Button variant={"outline-dark"}
                                    onClick={() => logOut()}
                            >
                                Выйти
                            </Button>
                        </>
                        :
                        <>
                            <Button variant={"outline-dark"}
                                    onClick={ () => navigation(ROUTES.LOGIN)}
                            >
                                Авторизация
                            </Button>
                        </>
                    }

                </Nav>
            </Container>
        </Navbar>
    )
        ;
});

export default NavBar;