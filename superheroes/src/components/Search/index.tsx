import * as St from './styles';

const Search = () => {
  return (
    <St.SearchContainer>
      <St.SearchTitle>Pesquise um Super-herói ou um vilão</St.SearchTitle>
      <St.SearchInput
        placeholder='Digite ao menos 3 letras'
        type='text'
      />

      <St.Button>Buscar</St.Button>
    </St.SearchContainer>
  );
}

export default Search