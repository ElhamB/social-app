const Button = (props) => {
    return (
      <button type={props.type || 'button'} {...props}>
      {props.children}
      </button>
    );
  };
  export default Button;