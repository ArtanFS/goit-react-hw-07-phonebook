import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <ThreeDots
        wrapperClass={css.Loader}
        height="40"
        width="120"
        radius="12"
        color="#212121"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </>
  );
};

export default Loader;
