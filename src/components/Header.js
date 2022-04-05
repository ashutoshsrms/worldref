

import { Container, Row, Col, Card } from "react-bootstrap"

export const Header = ({ clickHandler, value }) => {

    return (
        <Card style={{ background: '#f9fafb' }}>
            <Card.Body>
                <div className="container-fulid" >
                    <nav className="navbar  navbar-expand-lg navbar-primary">
                        <div className="container-fluid">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home {'>'} </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Messages</a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    <Row>
                        <Col sm={2}>
                            <h2>Messages</h2>
                        </Col>
                        <Col sm={6}>&nbsp;
                        </Col>

                        <Col sm={4}>
                            <form className="search-form1 d-flex align-items-center">
                                <button type="submit" className="csc" stitle="Search"><i className="fa fa-sort-amount-desc"></i> sort by</button>
                                <select className="form-control1" placeholder="sort by " name="select">
                                    <option value="valor1">Date Added</option>
                                </select>
                            </form></Col>
                    </Row>

                    <div className="container-fuild">
                        <Col sm={6}>
                            <form className="search-form d-flex align-items-center">
                                <button type="submit" title="Search" ><i className="fa fa-search"></i></button>
                                <input type="text" placeholder="Serach" className='search-bar search-padding' onChange={clickHandler} />
                            </form>
                        </Col>
                    </div>
                    <Col sm={6}></Col>
                </div>
            </Card.Body>
        </Card>
    )
}