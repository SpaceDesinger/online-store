import {observer} from "mobx-react-lite";
import {useStores} from "@/hooks/useStores.ts";
import {Row} from "react-bootstrap";
import DeviceItem from "@/components/DeviceItem.tsx";


const DeviceList = observer( () => {
    const {device} = useStores()

    return (
        <Row className="g-3 mt-3">
           {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;