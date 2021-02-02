import React from "react";
import { Hero } from "../design/Hero";
import { PostListing } from "../design/post/PostListing";
import { Root } from "../design/Root";

const Index: React.FunctionComponent = () => {
  return (
    <Root>
      <Hero
        title="Cody G."
        subtitle="Software engineer 🧑‍💻, rock-climber 🧗 and occasional pizza eater."
        image="https://images.pexels.com/photos/2189697/pexels-photo-2189697.jpeg?crop=entropy&cs=srgb&dl=pexels-emre-can-2189697.jpg&fit=crop&fm=jpg&h=600&w=800"
      />
      <PostListing />
    </Root>
  );
};

export default Index;
