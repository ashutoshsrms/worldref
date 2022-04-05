import { Container, Row, Col, Card } from "react-bootstrap"
import '../App.css';
import Spacer from 'react-add-space';
export const Messages = ({data}) => {

    return (
        <>
            <div className="container" >
                {data.map( d => {
              return ( 
              <>
              <Card>
                <Row>
                    <Col sm={5}>
                        <Card.Body>
                            <Row >
                                <Col style={{ textAlign: 'left' }}>
                                     {d.date}
                                </Col>
                                <Col>
                                    Deal No :{d.dealno}
                                </Col>
                            </Row>
                            <br/>
                            <p>
                                <b>{d.rowcontent}</b>
                                <Spacer amount={5}/><button type="button" className="btn btn-success btn-sm">Live</button> <Spacer amount={2}/> <i className="fa fa-circle icon"></i>
                            </p>
                            <p>
                                <b> US$ {d.price}</b> Deal Value
                            </p>
                            <p>
                                <b> D. Manager </b> John Doe, William C. , Name 3 <br />
                                <b>Associates</b> <span className="colorbold"><b>S</b> </span> John Doe, William C.
                                <br />
                                <Spacer amount={18} /> <span className="colorbold"><b>B</b></span>   John Doe, William C.
                            </p>
                        </Card.Body>
                    </Col>
                    <Col sm={7}>
                        <Card.Body className="message">
                            <p>
                                {d.msg}<a href="#">More+</a>
                            </p>
                            Jone Doe  22 May 2021 17:30 PM
                            <br />
                            <br />
                            <button className="btn btn-outline-primary pull-right"> <i className="fa fa-comment-o"></i> Message</button>
                            <br/>
                            <br/>
                        </Card.Body>
                    </Col>
                </Row>
                
            </Card>
            <br/>
            </>)

                })}

            </div>


        </>

    )
}