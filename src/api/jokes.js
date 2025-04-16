import { ref } from 'vue';

export function useJokes() {
  const joke = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function fetchJoke(type = 'random') {
    loading.value = true;
    error.value = null;

    let url =
      type === 'programming'
        ? 'https://official-joke-api.appspot.com/jokes/programming/random'
        : 'https://official-joke-api.appspot.com/random_joke';

    try {
      const res = await fetch(url);
      const data = await res.json();
      joke.value = Array.isArray(data) ? data[0] : data;
    } catch (err) {
      error.value = 'Failed to fetch joke';
    } finally {
      loading.value = false;
    }
  }

  return { joke, loading, error, fetchJoke };
}
