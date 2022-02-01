import { Container, Content } from "./styles";

import mastercraftLogo from "../../assets/img/logo-mastercraft.svg";
import bookmarkIcon from "../../assets/img/icon-bookmark.svg";
import bookmarkIconActive from "../../assets/img/icon-bookmark-active.svg";

import { PrimaryButton } from "../PrimaryButton";
import { useState } from "react";

export const ProductInfoSection = () => {
  const [bookmark, setBookmark] = useState(true);

  return (
    <Container>
      <Content>
        <img
          className="product-logo"
          src={mastercraftLogo}
          alt="logo mastercraft"
        />
        <h1 className="product-name">Mastercraft Bamboo Monitor Riser</h1>
        <p className="product-summary">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex-container">
          <PrimaryButton
            height="60px"
            maxWidth="210px"
            padding="20px 40px"
            text="Back this project"
          />
          <button
            style={
              bookmark ? {} : { background: "hsl(176, 50%, 97%)", color: "red" }
            }
            onClick={() => setBookmark(!bookmark)}
            className="btn-bookmark"
          >
            {bookmark ? (
              <>
                <img src={bookmarkIcon} alt="bookmark icon" />
                <p>Bookmark</p>
              </>
            ) : (
              <>
                <img src={bookmarkIconActive} alt="bookmark icon active" />
                <p style={{ color: "var(--dark-cyan)" }}>Bookmarked</p>
              </>
            )}
          </button>
        </div>
      </Content>
    </Container>
  );
};
