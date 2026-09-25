import {observer} from "mobx-react-lite";
import {useStores} from "@/hooks/useStores.ts";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useStores()

    return (
        <ListGroup>
            { device.types.map( type =>
                <ListGroup.Item
                    active={ type.id === device.selectedType?.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;