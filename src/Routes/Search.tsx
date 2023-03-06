import { useQuery } from "react-query";
import styled from "styled-components";
import { SearchMovie, SearchTv } from "../api";

const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Search() {
  const { isLoading: loadingMovie, data: MovieData } = useQuery(
    ["searchMovie"],
    SearchMovie
  );
  const { isLoading: loadingTv, data: TvData } = useQuery(
    ["SearchTv"],
    SearchTv
  );
  return <Wrapper></Wrapper>;
}

export default Search;
