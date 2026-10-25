import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

/**
 * useAxios – gọi API bằng axios trong useEffect
 *
 * @param {(signal: AbortSignal) => Promise<{data, headers?}>} requestFn
 * @param {Array} deps
 * @param {Object} options - enabled, initialData
 * @returns { data, setData, headers, loading, error, refetch }
 */
export default function useAxios(
  requestFn,
  deps = [],
  { enabled = true, initialData = null } = {}
) {
  const [data, setData] = useState(initialData);
  const [headers, setHeaders] = useState({});
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [doneKey, setDoneKey] = useState(null);

  const key = JSON.stringify([...deps, reloadKey]);

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();

    const run = async () => {
      setError(null);
      try {
        const res = await requestFn(controller.signal);
        setData(res.data);
        setHeaders(res.headers ?? {});
      } catch (err) {
        if (axios.isCancel(err)) return;
        setError(err.userMessage ?? err.message);
      } finally {
        if (!controller.signal.aborted) setDoneKey(key);
      }
    };

    run();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  const loading = enabled && doneKey !== key;

  const refetch = useCallback(() => setReloadKey((k) => k + 1), []);

  return { data, setData, headers, loading, error, refetch };
}
