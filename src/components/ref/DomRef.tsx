import { useRef, useEffect } from "react";

export const DomRef = () => {
  // null! hieu la truong nay se khong bao gio trong
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};
