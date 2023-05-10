export default function EventBoxApi() {
  return fetch(`/data/evt.json`)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}
