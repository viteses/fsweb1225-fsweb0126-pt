import styled from "styled-components";
import TrendingMovie from "./TrendingMovie";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

function TrendingList(props) {
  const { movies } = props;

  return (
    <Container>
      {movies.map((movie, index) => (
        <TrendingMovie key={movie.imdbID} movie={movie} rank={index + 1} />
      ))}
    </Container>
  );
}

export default TrendingList;
