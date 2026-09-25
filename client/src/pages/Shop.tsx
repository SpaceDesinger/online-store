import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "@/components/TypeBar.tsx";
import BrandBar from "@/components/BrandBar.tsx";
import DeviceList from "@/components/DeviceList.tsx";
import {observer} from "mobx-react-lite";
import {useStores} from "@/hooks/useStores.ts";
import {useEffect} from "react";
import {fetchBrands, fetchDevices, fetchTypes} from "@/entities/api/diveceApi.ts";
import Pages from "@/components/Pages.tsx";

const Shop = observer(() => {
    const {device} = useStores()

    useEffect( () => {
        fetchTypes().then( data => device.setTypes(data))
        fetchBrands().then( data => device.setBrands(data))
        fetchDevices(null , null , 1 ,3).then( data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    } , [])

    useEffect(() => {
        fetchDevices(device.selectedType?.id ?? null , device.selectedBrand?.id ?? null , device.page ,3).then( data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page , device.selectedType , device.selectedBrand]);
    return (
      <Container>
          <Row className="mt-3">
              <Col md={3}>
                  <TypeBar/>
              </Col>
              <Col md={9}>
                  <BrandBar/>
                  <DeviceList/>
                  <Pages/>
              </Col>
          </Row>
      </Container>
    );
});

export default Shop;