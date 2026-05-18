import styled from "styled-components";
import SuggestionList from "./SuggestionList";
import { movieData } from "../data";

const Container = styled.div`
  color: white;
  font-weight: bold;
  padding: 2rem;
`;

function Suggestion(props) {
  const { title, className } = props;

  return (
    <Container className={className}>
      <h2>{title}</h2>
      <SuggestionList movies={movieData} />
    </Container>
  );
}

export default Suggestion;
