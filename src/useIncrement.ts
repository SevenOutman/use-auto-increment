import { useState, useMemo } from 'react';

interface IncrementByFunc {
    (amount: number): void;
}

interface IncrementFunc extends IncrementByFunc{
    (): void;
    by: IncrementByFunc;
}


/**
 * Auto-incrementing state
 */
export default function useIncrement(initialValue: number = 1, step: number = 1): [number, IncrementFunc] {
  const [value, setValue] = useState(initialValue);

  const increment = useMemo(() => {

      const incrementFunc = () => {
          setValue(v => v + step);
      }

      incrementFunc.by = (amount: number) => {
          setValue(v => v + amount);
      }

      return incrementFunc;
  }, [step]);

  return [value, increment];
}
