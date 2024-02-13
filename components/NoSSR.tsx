import { useEffect, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

interface NoSSRProps {
  children: React.ReactNode;
  defer?: boolean;
  fallback?: React.ReactNode;
}
const useEnhancedEffect =
  typeof window !== "undefined" && process.env.NODE_ENV !== "test"
    ? useLayoutEffect
    : useEffect;

const NoSSR = ({ children, defer, fallback }: NoSSRProps) => {
  const [isMounted, setMountedState] = useState(false);

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true);
  }, [defer]);

  useEffect(() => {
    if (defer) setMountedState(true);
  }, [defer]);

  return isMounted ? children : fallback;
};

export default NoSSR;
