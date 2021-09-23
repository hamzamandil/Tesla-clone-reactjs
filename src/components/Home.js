import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';



function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                bgImage="model-s.jpg"
                leftBtn="Custom Order"
                RightBtn="Existing inventory"
            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                bgImage="model-3.jpg"
                leftBtn="Custom Order"
                RightBtn="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                bgImage="model-x.jpg"
                leftBtn="Custom Order"
                RightBtn="Existing inventory"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                bgImage="model-y.jpg"
                leftBtn="Custom Order"
                RightBtn="Existing inventory"
            />
            <Section 
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                bgImage="solar-panel.jpg"
                leftBtn="Order Now"
                RightBtn="Learn More"
            />
            <Section 
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                bgImage="solar-roof.jpg"
                leftBtn="Order Now"
                RightBtn="Learn More"
            />
            <Section 
                title="Accessories"
                description=""
                bgImage="accessories.jpg"
                leftBtn="Shop Now"
            />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`