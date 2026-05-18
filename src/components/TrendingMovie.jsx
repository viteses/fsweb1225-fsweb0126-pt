import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 17%;
  aspect-ratio: 1/1;
`;

const Image = styled.img`
  width: 60%;
  display: block;
  position: absolute;
  right: 0;
  z-index: 100;
`;

const Rank = styled.p`
  font-size: 15rem;
  position: absolute;
  left: 0;
  margin: 0;
  margin-top: -2.6rem;
  color: black;
  -webkit-text-stroke: 4px gray;
  z-index: 0;
`;

function TrendingMovie(props) {
  const { movie, rank } = props;

  return (
    <Container>
      <Rank>{rank}</Rank>
      <Image src={movie.Poster} />
    </Container>
  );
}

export default TrendingMovie;
