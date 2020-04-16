import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";

const StyledBackground = styled.div<{
  preImageSrc: string;
  imageSrc: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  transition: filter 1s ease-in-out;
  ${({ preImageSrc }) => `
    background-image: url("${preImageSrc}");
    filter: blur(20px);
    `}

  ${({ imageSrc }) =>
    imageSrc &&
    css`
  background-image: url("${imageSrc}");
  filter: blur(0);
  `}

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function loadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = (err) => reject(err);
    image.src = src;
  });
}

const Background: React.FunctionComponent<{
  imageSrc: { path: string; filename: string };
}> = ({ imageSrc }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    const load = async () => {
      const src = await loadImage(`${imageSrc.path}${imageSrc.filename}`);
      setBackgroundImage(src);
    };
    load();
  }, []);

  return (
    <StyledBackground
      preImageSrc={`${imageSrc.path}pre-${imageSrc.filename}`}
      imageSrc={backgroundImage}
    />
  );
};

export { Background };
