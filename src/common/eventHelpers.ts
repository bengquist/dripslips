const noop = () => {};

export function stopPropagation<E extends React.SyntheticEvent>(
  func: (event: E) => void = noop
) {
  return (event: E) => {
    event.stopPropagation();
    func(event);
  };
}
