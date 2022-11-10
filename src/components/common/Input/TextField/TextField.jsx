const TextField = ({ text, name, inputType, onChange, value }) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input type={inputType} id={name} onChange={onChange} value={value} />
    </>
  );
};

export default TextField;
