import React, { useState, ChangeEventHandler } from "react";
import { Container, Content } from "./styles";

export const ProductNumbersSection = () => {
  const [range, setRange] = useState("89914");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRange(event.target.value);
  };

  const setRangeBackground = (range: string) => {
    return `linear-gradient(90deg, hsl(176, 50%, 47%) ${
      (parseInt(range) / 100000) * 100
    }%, #ededed ${(parseInt(range) / 100000) * 100}%)`;
  };

  const totalBackedConverted: string = parseInt(range).toLocaleString("en-US");

  return (
    <Container>
      <Content>
        <div className="flex-container">
          <div className="number">
            <span className="number-value">${totalBackedConverted}</span>
            <span className="number-backed">of $100,000 backed</span>
          </div>
          <div className="number">
            <span className="number-value">5,007</span>
            <span className="number-backed">total backers</span>
          </div>
          <div className="number">
            <span className="number-value">56</span>
            <span className="number-backed">days left</span>
          </div>
        </div>
        <input
          style={{ background: `${setRangeBackground(range)}` }}
          onChange={handleChange}
          type="range"
          min="0"
          max="100000"
          value={range}
          className="value-range"
        />
      </Content>
    </Container>
  );
};
