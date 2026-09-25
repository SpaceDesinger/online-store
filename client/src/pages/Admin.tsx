import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import CreateBrand from "@/components/modals/CreateBrand.tsx";
import CreateType from "@/components/modals/CreateType.tsx";
import CreateDevice from "@/components/modals/CreateDevice.tsx";
import {useState} from "react";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container>
            <Button
                variant={"outline-dark"}
                className="me-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="me-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бранд
            </Button>
            <Button
                variant={"outline-dark"}
                className="me-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить Устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => {setBrandVisible(false)}}/>
            <CreateType show={typeVisible} onHide={() => {setTypeVisible(false)}}/>
            <CreateDevice show={deviceVisible} onHide={() => {setDeviceVisible(false)}}/>
        </Container>
    );
};

export default Admin;