const formInput = ({label, ...otherProps}) => {
  return (
    <div>
      <label>Display Name</label>
        <input {...otherProps} />
    </div>
  );
};

export default formInput;