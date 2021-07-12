import React from "react";
import { Container, Row, Col } from "reactstrap";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const HeaderBannerCapacitaciones = () => {
  return (
    <div className="static-slider-headCapacitaciones static-slider-headCapacitacionesResponsive">
      <Container className="containerHeaderCap">
        <Row className="justify-content-left row-banner">
          <Col lg="8" className="align-self-center p-b-30 marginColHeaderCap">
            {/* <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                        <Link color="inherit" href="#">
                            Home
                        </Link>
                        <Link color="inherit" href="#">
                            Catalog
                        </Link>
                        <Link color="inherit" href="#">
                            Accessories
                        </Link>
                        <Link color="inherit" href="#">
                            New Collection
                        </Link>
                        <Typography color="textPrimary">Belts</Typography>
                    </Breadcrumbs> */}
            <h1 className="title-1 title-1ResponsiveCapheader">Potenciá</h1>
            <h1 className="title-1 title-1ResponsiveCapheader">
              habilidades para
            </h1>
            <h1 className="title-1 TitHeaderCapbold title-1ResponsiveCapheader">
              tu futuro laboral.
            </h1>
            {/*<h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
            {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>*/}
            <hr className="lineaCard lineaCard1 lineaCard1Responsive lineaHeaderInfoCap m-b-30" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBannerCapacitaciones;
