import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import star from "@/assets/star.svg"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "@/entities/api/diveceApi.ts";
import type {Device} from "@/store/DeviceStore.ts";

type DeviceInfo = {
    id: number
    title: string
    description: string
}
export type OneDevice = Device & {
    info: DeviceInfo[]
}
const DevicePage = () => {
    const [device, setDevice] = useState<OneDevice | null>(null)

    const {id} = useParams()
    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    if(!device) {
        return <div>Загрузка...</div>
    }
    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <Image width={'100%'} className="object-fit-contain"
                           src={import.meta.env.VITE_APP_API_URL + device.img}/>
                </Col>
                <Col md={6}>
                    <div className="d-flex align-items-start justify-content-between">
                        <h2>{device.name}</h2>
                        <div className="d-flex justify-content-center align-items-center" style={{fontSize: '20px'}}>
                            {device.rating}
                            <Image width={18} height={18} src={star}/>
                        </div>
                    </div>
                    <Card
                        className="mt-3 p-3"
                    >
                        <h3>Цена {device.price} ₽</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <h3>Характеристики</h3>
                <ListGroup className="mt-3">
                    {device.info.map((info, index) =>
                        <ListGroup.Item key={info.id} variant={index % 2 === 0 ? "light" : "secondary"}>
                            {info.title} : {info.description}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Row>
        </Container>
    );
};

export default DevicePage;