import { HomeRewardCard } from "../HomeRewardCard";
import { Container, Content } from "./styles";

export const ProductAboutSection = () => {
  return (
    <Container>
      <Content>
        <h3 className="title">About this project</h3>
        <p className="paragraph">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="paragraph">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <HomeRewardCard
          title="Bamboo Stand"
          pledge={25}
          quantityNumber={101}
          paragraph="You get an ergonomic stand made of natural bamboo.
                You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list."
        />
        <HomeRewardCard
          title="Black Edition Stand"
          pledge={75}
          quantityNumber={64}
          paragraph="You get a Black Special Edition computer stand 
                    and a personal thank you. You’ll be added to our Backer 
                    member list. Shipping is included."
        />
        <HomeRewardCard
          title="Mahogany Special Edition"
          pledge={200}
          quantityNumber={0}
          paragraph="You get two Special Edition Mahogany stands, 
                    a Backer T-Shirt, and a personal thank you. You’ll be added 
                    to our Backer member list. Shipping is included."
        />
      </Content>
    </Container>
  );
};
