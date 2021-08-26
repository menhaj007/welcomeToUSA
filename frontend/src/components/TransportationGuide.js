import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import dmv from './dmv.png'

export default function TransportationGuide() {
    return (
        <div className="container">
            <Row>
                <Col>
                <h1>Local Transportation</h1>
                <div className="mt-3 mb-3">
                    <h3 className="link"><a href="https://www.wmata.com/fares/MobilePay/SmarTrip-App.cfm">SmarTrip App</a></h3>
                </div>
                <div className="mt-3 mb-3">
                    <h3 className="link"><a href="https://transitapp.com/region/washington-dc">transitapp</a></h3>
                </div>
                <div className="mt-3 mb-3">
                    <h3 className="link"><a href="hhttps://www.google.com/maps">Google Map for local transit</a></h3>
                </div>
                <div className="mt-3 mb-3">
                    <h3 className="link"><a href="https://apps.apple.com/us/app/dc-metro-and-bus/id578496721">DC Metro and Bus</a></h3>
                </div>
                </Col>
                <Col>
                    <h1>DMV Map</h1>
                    <Image src={dmv} alt="dmv area map" style={{width: "100%"}}/>
                </Col>
            </Row>
            
        </div>
    )
}
