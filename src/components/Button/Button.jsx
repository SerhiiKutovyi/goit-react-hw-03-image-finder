import { Btn } from './Button.stylles';

export const Button = ({ clickLoad }) => {
  return (
    <>
      <Btn type="button" onClick={clickLoad}>
        Load more
      </Btn>
    </>
  );
};
