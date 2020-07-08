export default function formatName(name, limit) {
  return name.slice(0, limit) + (name.length > limit ? "..." : "");
}
