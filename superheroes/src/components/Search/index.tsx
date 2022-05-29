import * as St from './styles';

const Search = (props:any) => {
  return (
    <St.SearchContainer>
      <St.SearchTitle>Pesquise um Super-herói ou um vilão</St.SearchTitle>
      <St.SearchInput
        placeholder='Digite ao menos 3 letras'
        type='text'
        onChange={props.change}
      />

      <St.Button onClick={props.search}>Buscar</St.Button>
    </St.SearchContainer>
  );
}

export default Search