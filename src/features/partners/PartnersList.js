import { Col, Row } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux";
import { selectCommentsByCampsiteId } from "../comments/commentsSlice";

//const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
  return (
    <Col className="mt-4">
      <Row>
      {partners.map((partner) => {
        return (
          <div className="d-flex mb-5 key={partner.id}">
            <Partner partner={partner} />
          </div>
        );
      })}
      </Row>
    </Col>
  );
};

export default PartnersList;
