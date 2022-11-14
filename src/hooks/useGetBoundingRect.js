export default function useGetBoundingRect(node) {
  if (!node) {
    return {};
  }

  const { top, bottom, left, right } = node.getBoundingClientRect();

  return { top, bottom, left, right };
}
