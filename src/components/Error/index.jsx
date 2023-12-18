import css from './Error.module.css';

const Error = ({ err }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>An error occurred: {err}</p>
    </div>
  );
};

export default Error;
