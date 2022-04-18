import React from "react";
import Icon1 from "../../images/svg-5.svg"
import Icon2 from "../../images/svg-6.svg"
import Icon3 from "../../images/svg-7.svg"
import {ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements"

export default function Services () {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Long Established</ServicesH2>
                    <ServicesP>All the Lorem Ipsum generators on the Internet tend to repeat predefine.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>By the readable content of a page when looking at its layout.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Many Desktop</ServicesH2>
                    <ServicesP>It is a long established fact that a reader will be distracted.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}