import { Container, Content } from "./styles"

export const ProductAboutSection = () => {
    return (
        <Container>
            <Content>
                <h3 className="title">About this project</h3>
                <p className="paragraph">The Mastercraft Bamboo Monitor 
                    Riser is a sturdy and stylish platform that elevates your screen to a 
                    more comfortable viewing height. Placing your monitor at eye level has 
                    the potential to improve your posture and make you more comfortable while 
                    at work, helping you stay focused on the task at hand. 
                </p>
                <p className="paragraph">
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your 
                    computer to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
            </Content>
        </Container>
    )
}