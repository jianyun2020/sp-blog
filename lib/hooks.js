import { useEffect, useRef } from "react";
import { isBrowser } from "./utils";

export function useTitle(title, options = { restoreOnUnmount: false }) {
  const titleRef = useRef(isBrowser ? document.title : "");

  useEffect(() => {
    document.title = title;

    return () => {
      if (options.restoreOnUnmount) {
        document.title = titleRef.current;
      }
    };
  }, [title]);
}
