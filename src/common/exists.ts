/**
 * True if the given value is not undefined or null.
 * Useful for mapping out undefined values,
 * such that the resulting array will have non-null types
 *
 * @example
 * const items: (string | undefined)[] = [...]
 * const filteredItems: string[] = items.filter(exists)
 */
function exists<T>(value: T | undefined | null | void): value is T {
  return value != null;
}
export default exists;
