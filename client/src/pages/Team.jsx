import { Container, Row, Col } from 'react-bootstrap';

export default function Team() {
  return (
    <section id="team" className="py-5">
      <h2 className="text-center mb-5">Behind Closed Doors</h2>

      <div className="container2">
        <Row className="justify-content-center">
          {/* Detective 1: Kai Hyoudo */}
          <Col md={4} className="detectives mb-4" id="card1">
            <img
              className="icon img-fluid"
              id="img1"
              src={`${import.meta.env.BASE_URL}images/kai.png`}
              alt="Image of Kai Hyoudo"
            />
            <p className="eng-name">Kai Hyoudo</p>
            <p className="jp-name">兵藤 解</p>
            <p className="desc">
              The eccentric modern tactician and digital specialist. Kai views
              every crime as a complex puzzle or code waiting to be broken, using
              unconventional methods to dominate the cyber realm and untangle
              technological webs.
            </p>
          </Col>

          {/* Detective 2: Sae Kirishima */}
          <Col md={4} className="detectives mb-4" id="card2">
            <img
              className="icon img-fluid"
              id="img2"
              src={`${import.meta.env.BASE_URL}images/sae.png`}
              alt="Image of Sae Kirishima"
            />
            <p className="eng-name">Sae Kirishima</p>
            <p className="jp-name">霧島 冴</p>
            <p className="desc">
              The agency’s lead investigator and a cool, disciplined logician.
              Sae cuts through the "fog" of complex cases by spotting the
              microscopic details and inconsistencies that everyone else misses,
              never letting emotion cloud her judgment.
            </p>
          </Col>

          {/* Detective 3: Rin Kageyama */}
          <Col md={4} className="detectives mb-4" id="card3">
            <img
              className="icon img-fluid"
              id="img3"
              src={`${import.meta.env.BASE_URL}images/rin.png`}
              alt="Image of Rin Kageyama"
            />
            <p className="eng-name">Rin Kageyama</p>
            <p className="jp-name">影山 凛</p>
            <p className="desc">
              The intuitive muscle and silent shadow of the group. Rin is a
              master of dangerous groundwork, relying on formidable street smarts
              and a terrifyingly accurate gut instinct to navigate the parts of
              Tokyo where standard police procedure fails.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}