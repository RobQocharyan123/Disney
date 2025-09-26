import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  //   action to fetch data

  fetchData: async (url) => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      const json = await res.json();
      set({ data: json, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useStore;
