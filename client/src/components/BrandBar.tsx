import {observer} from "mobx-react-lite";
import {Card, Col, Row} from "react-bootstrap";
import {useStores} from "@/hooks/useStores.ts";

const BrandBar = observer(() => {
    const {device} = useStores()
    return (
        <Row className="g-1">
            { device.brands.map( brand =>
                <Col  key={brand.id} md={2} >
                    <Card
                        style={{cursor:'pointer'}}
                        className="p-2 text-center"
                        onClick={ () => device.setSelectedBrand(brand)}
                        border={ brand.id === device.selectedBrand?.id ? 'primary' : ''}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;