"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error">
      <h1>Something went wrong</h1>
      <p>The world couldn’t render. Try reloading or switching to reduced motion.</p>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
