import {Card, Col, Image} from "react-bootstrap";
import type {Device} from "@/store/DeviceStore.ts";
import star from "@/assets/star.svg"
import {useNavigate} from "react-router-dom";
import {getDeviceRoute} from "@/utils/constants/routes.ts";


const DeviceItem = ({device}: { device: Device }) => {
    const history = useNavigate()
    return (
        <Col md={3}>
            <Card style={{cursor: 'pointer'}} border={'dark'}
                  onClick={ () => history(getDeviceRoute(device.id))}>
                <Image height={150} src={import.meta.env.VITE_APP_API_URL + device.img} className="object-fit-cover"/>
                <Card.Body>
                    <div className="d-flex justify-content-between mt-1">
                        <div className="text-black-50"> {device.name}</div>
                        <div className="d-flex align-items-center">
                            <div>{device.rating}</div>
                            <Image width={15} height={15} src={star}/>
                        </div>
                    </div>
                    <div>{device.name}</div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DeviceItem;