import Container from "react-bootstrap/Container";
import {Button, Card, Form} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "@/utils/constants/routes.ts";
import {login, registration} from "@/entities/api/userApi.ts";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "@/hooks/useStores.ts";



const Auth = observer(() => {
    const {user} = useStores()
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === ROUTES.LOGIN
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
      try {
          let data;
          if(isLogin) {
              data = await login({email, password})
          } else {
              data = await registration({email, password})
          }
          user.setUser(data)
          user.setIsAuth(true)
          navigate(ROUTES.SHOP)
      } catch (e) {
          alert(e.response.data.message)
      }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email.."
                        value={email}
                        autoComplete="username"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль.."
                        value={password}
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="mt-3 d-flex justify-content-between">
                        { isLogin ?
                            <div>
                                Нет аккаунта? <Link to={ROUTES.REGISTRATION}>Зарегестрироваться</Link>
                            </div>
                        :
                                <div>
                                    Есть аккаунта? <Link to={ROUTES.LOGIN}>Вход</Link>
                                </div>
                        }
                        <div>
                            <Button onClick={click} variant={"outline-dark"}>{ isLogin ? 'Войти' : 'Регистрация'}</Button>
                        </div>
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;