import { useCallback, useEffect, useState } from 'react';

const KEY = 'dse.progress.v1';

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { read: [], quiz: {} };
  } catch {
    return { read: [], quiz: {} };
  }
};

/**
 * Reading progress and quiz scores, persisted to localStorage.
 * Shared across components via a module-level subscriber list so that
 * marking a chapter read in the chapter view updates the sidebar too.
 */
let state = load();
const listeners = new Set();

const commit = (next) => {
  state = next;
  localStorage.setItem(KEY, JSON.stringify(state));
  listeners.forEach((fn) => fn(state));
};

export function useProgress() {
  const [snapshot, setSnapshot] = useState(state);

  useEffect(() => {
    listeners.add(setSnapshot);
    return () => listeners.delete(setSnapshot);
  }, []);

  const isRead = useCallback((n) => snapshot.read.includes(Number(n)), [snapshot]);

  const toggleRead = useCallback((n) => {
    const num = Number(n);
    const read = state.read.includes(num)
      ? state.read.filter((x) => x !== num)
      : [...state.read, num];
    commit({ ...state, read });
  }, []);

  const setQuizScore = useCallback((n, score, total) => {
    commit({ ...state, quiz: { ...state.quiz, [n]: { score, total } } });
  }, []);

  const getQuizScore = useCallback((n) => snapshot.quiz[n] || null, [snapshot]);

  const reset = useCallback(() => commit({ read: [], quiz: {} }), []);

  return {
    read: snapshot.read,
    isRead,
    toggleRead,
    setQuizScore,
    getQuizScore,
    reset,
  };
}
