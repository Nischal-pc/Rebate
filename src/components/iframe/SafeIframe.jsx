import { useState, useEffect } from "react";

// Define constant for ids that should redirect
const REDIRECT_IDS = new Set([2, 3, 4, 6]);

function SafeIframe({ src, id }) {
  const [iframeState, setIframeState] = useState({
    failed: false,
    loading: true,
  });

  useEffect(() => {
    setIframeState({
      failed: false,
      loading: true,
    });
  }, [src]);

  const handleLoad = () => {
    setIframeState((prev) => ({
      ...prev,
      loading: false,
      failed: false,
    }));
  };

  const handleError = () => {
    setIframeState({
      loading: false,
      failed: true,
    });
  };

  if (REDIRECT_IDS.has(id)) {
    return (
      <div className="flex justify-center p-8 bg-gray-50 rounded-lg">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          Visit the official website
        </a>
      </div>
    );
  }

  const { loading } = iframeState;

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
        </div>
      )}
      <iframe
        src={src}
        className="w-full h-[70vh] border-0 rounded-lg"
        onLoad={handleLoad}
        onError={handleError}
        title={`iframe-${id}`}
      />
    </div>
  );
}

export default SafeIframe;
