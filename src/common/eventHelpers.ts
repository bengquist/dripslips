function noop() {}

export function stopPropagation<E extends React.MouseEvent>(event: E) {
  event.stopPropagation();
}
