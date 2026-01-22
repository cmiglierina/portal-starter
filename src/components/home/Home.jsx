import { Col, Container, Row } from "react-bootstrap";
import MassBarChart from "../graph/BarChart";
import IndexLineChart from "../graph/LineChart";
import PieChartWithCustomizedLabel from "../graph/PieChart";
import SimpleRadarChart from "../graph/SimpleRadarChart";


function Home() {


    return (
    <>
        <h2>Portal data</h2>
        <Container>
            <Row>
                <Col xs={6}><IndexLineChart></IndexLineChart></Col>
                <Col xs={6}><MassBarChart></MassBarChart></Col>
            </Row>
            <Row>
                <Col xs={6}><SimpleRadarChart/></Col>
                <Col xs={6}><PieChartWithCustomizedLabel></PieChartWithCustomizedLabel></Col>
            </Row>
        </Container>
    </>
    );
}

export default Home;