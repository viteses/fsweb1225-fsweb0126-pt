import styled from "styled-components";
import video from "../assets/movies/Person of Interest Season 5 - Extended Trailer - IGN (720p, h264).mp4";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Suggestion from "../components/Suggestion";

const Container = styled.div`
  background: black;
  min-height: 100vh;

  & .first {
    margin-top: -30rem;
    z-index: 100;
    position: relative;
  }
`;

const Video = styled.video`
  width: 100vw;
  height: 80vw;
  margin-top: -12vw;
`;

const TopHeader = styled(Header)`
  position: absolute;
  left: 0;
  right: 0;
`;

function Browse(props) {
  const { profile } = props;
  return (
    <Container>
      <TopHeader profile={profile} />
      <Video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </Video>
      <Suggestion className="first" title="Today's Top Pick For You" />
      <Trending title="Top 10 TV Shows in Türkiye Today" />
      <Suggestion title="Today's Top Pick For You" />
      <Suggestion title="Today's Top Pick For You" />
      <Trending title="Today's Top Pick For You" />
      <Suggestion title="Today's Top Pick For You" />
      <Suggestion title="Today's Top Pick For You" />
      <Suggestion title="Today's Top Pick For You" />
      <Suggestion title="Today's Top Pick For You" />
    </Container>
  );
}

export default Browse;
