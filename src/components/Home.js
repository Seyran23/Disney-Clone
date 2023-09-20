import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
// import { db } from "../firebase";
import { getFirestore } from 'firebase/firestore'
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { useEffect } from "react";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  
  
  useEffect(() => {
      const db = getFirestore();
      const moviesCollection = collection(db, "movies");
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];


    onSnapshot(moviesCollection, (snapshot) => {
      snapshot.forEach((doc) => {
        const { type, ...data } = doc.data();

        switch (type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...data }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...data }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...data }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...data }];
            break;
        }
      });
      
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
  }
`;

export default Home;
