import styled from "styled-components";
import TrendingList from "./TrendingList";
import { movieData } from "../data";

const Container = styled.div`
  color: white;
  font-weight: bold;
  padding: 2rem;
`;

function Trending(props) {
  const { title } = props;

  return (
    <Container>
      <h2>{title}</h2>
      <TrendingList movies={movieData} />
    </Container>
  );
}

export default Trending;
