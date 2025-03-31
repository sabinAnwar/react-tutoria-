export function StatusChanger(props) {
  const newStatus = props.statusText;

  const handleClick = () => {
    props.onStatusChange(newStatus);
  };
  return <button onClick={handleClick}>{newStatus}</button>;
}
