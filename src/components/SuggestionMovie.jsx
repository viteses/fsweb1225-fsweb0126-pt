import styled from "styled-components";

const Container = styled.div`
  width: 17%;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 5/3;
  display: block;
`;

function SuggestionMovie(props) {
  const { movie } = props;

  return (
    <Container>
      <Image src={movie.Poster} />
    </Container>
  );
}

export default SuggestionMovie;
