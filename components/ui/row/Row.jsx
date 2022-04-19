function Row(props) {
  return (
    <div className={props.bgColor}>
      <div className="container w-4/5 mx-auto">{props.children}</div>
    </div>
  );
}
export default Row;
