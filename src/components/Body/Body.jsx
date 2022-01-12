import React, { useContext } from "react";

import { BBB, Main } from "./style";
import BodyTop from "./BodyTop/BodyTop";
import { MovieContext } from "../../context/movie";

const Body = () => {
  const [state] = useContext(MovieContext);
  return (
  <BBB>
      <Main>
      <BodyTop />
      <Main.Content>
        {state.map((value) => {
          return (
            <Main.Channel key={value.id}>
              <img src={value.img} alt="" width={295} height={186} />
              <Main.User>
                <img src={value.user} alt="" />
                <Main.ChannelTitle>{value.title}</Main.ChannelTitle>
              </Main.User>
              <Main.Description>{value.description}</Main.Description>
              <Main.Views>
                {value.id ** 3 * 3 + 1}k Ko'rishlar soni -{" "}
                {Math.round((value.id * 10) / value.id ** 1)} kun avval{" "}
              </Main.Views>
            </Main.Channel>
          );
        })}
      </Main.Content>
    </Main>
  </BBB>
  );
};

export default Body;
