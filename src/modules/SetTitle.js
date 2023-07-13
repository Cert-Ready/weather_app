import { useEffect } from "react";

const SetTitle = (title) => {
  let isMounted = false;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return () => {
    isMounted = true;
  };
};

export { SetTitle };
