import { clear } from "@testing-library/user-event/dist/clear";
import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    // chạy vô đây vẫn là chữ 'h'
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 'h' vẫn chạy vô đây nhưng có 2 trg hợp
    // 1 . nếu ngừng gõ thì value sẽ được set là chữ ' h ' và trả ra là handler
    // 2 . nếu gõ tiếp thì value sẽ được set là chuỗi rỗng ' ' và trả ngược lại debouncedValue
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
