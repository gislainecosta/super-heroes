import * as St from './styles';

import LoadingImg from '../../images/loading.gif'

const Loading = () => {

  return (
    <St.LoadingContainer>
      <St.Loading src={LoadingImg} alt="Loading"/>
      <St.Title>Aguarde um momento</St.Title>
    </St.LoadingContainer>
  );
}

export default Loading