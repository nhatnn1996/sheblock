import React from 'react';
import { Container } from 'reactstrap';

// import Components
import BreadCrumb from '../../Components/Common/BreadCrumb';

import TileBoxs from './TileBoxs';
import OtherWidgets from './OtherWidgets';
import UpcomingActivity from './UpcomingActivities';
import ChartMapWidgets from './Chart&MapWidgets';


const Widgets = () => {
    document.title="Widgets | S.H.E Blockchain – Empowering Women in Blockchain";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Widgets" pageTitle="sheblockchain" />
                    {/* Tile Boxs Widgets */}
                    <TileBoxs />

                    {/* Other Widgets */}
                    <OtherWidgets />

                    {/* Upcoming Activity */}
                    <UpcomingActivity />

                    {/* Chart & Map Widgets */}
                    <ChartMapWidgets />

                </Container>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
