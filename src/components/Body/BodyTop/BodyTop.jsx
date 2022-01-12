import React, { useContext } from "react";
import { Category } from "./style";
import { data } from "../../../mock/data";
import { MovieContext } from "../../../context/movie";

const BodyTop = () => {
  const [state, setState] = useContext(MovieContext);
  const onChange = (e) => {
    const { value } = e.target;
    let res = data.filter(
      (val) => val.category.toLowerCase() === value.toLowerCase()
    );
    setState(res);
  };

  return (
    <Category>
      <Category.Btn onClick={onChange} value="Comedy">
       Fruits
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Game">
  React
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Vlog">
       Html
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Music">
        Music
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Movie">
        Movie
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Course">
        Course
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Mixes">
        Mixes
      </Category.Btn>
      <Category.Btn onClick={onChange} value="React">
        Angular
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
        Javascript
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
       Compyuter
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
     Css
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
    Vue js
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
   Next js
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
    Vue js
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
    Dance Music
      </Category.Btn>
      <Category.Btn onClick={onChange} value="Javascript">
   live
      </Category.Btn>
    </Category>
  );
};

export default BodyTop;
