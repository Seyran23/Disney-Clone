import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, setDoc } from "firebase/firestore";
import {  doc } from "firebase/firestore";

const Details = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const setMovies = async () => {
      try {
        const db = getFirestore();

        const docRef = doc(db, "movies", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetailData(docSnap.data());
        } else {
          console.log("no such document in firebase");
        }
        console.log(detailData);
      } catch (error) {
        console.log("Error getting documnet: ", error);
    }
    };

    setMovies();
  }, []);


  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img alt="" src="/images/play-icon-black.png" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img alt="" src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img alt="" src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    /* @media (max-width: 768px) {
            width: initial;
        } */
  }
`;

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 170px;
  width: 100%;
  -webkit-box-pack: start;

  img {
    position: absolute;
    top: 50px;
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;

  @media (max-width: 768px) {
    margin-top: 150px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);
  border: none;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 54px;
  width: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 54px;
  width: 54px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;

  div {
    height: 50px;
    width: 50px;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
  }

  img {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Details;
