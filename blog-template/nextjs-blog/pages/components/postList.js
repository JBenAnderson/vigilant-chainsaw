import Link from "next/link";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default function PostList() {
  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-2 g-4"
        style={{ margin: "0 0.5rem 10px 0.5rem", padding: 0, marginLeft: 23 }}
      >
        <div className="col">
          <div className="card">
            <img src="/shape.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p clasNames="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
