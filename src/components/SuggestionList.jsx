import styled from "styled-components";
import SuggestionMovie from "./SuggestionMovie";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

function SuggestionList(props) {
  const { movies } = props;

  return (
    <Container>
      {movies.map((movie, index) => (
        <SuggestionMovie key={movie.imdbID} movie={movie} rank={index + 1} />
      ))}
    </Container>
  );
}

export default SuggestionList;
