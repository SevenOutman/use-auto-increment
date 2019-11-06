# use-increment

> React Hook for incrementing value

    yarn add @sevenoutman/use-increment

## Usage

```javascript
import useIncrement from '@sevenoutman/use-increment';

function App() {
    
    const [clickCount, increment] = useIncrement(0);
    
    return (
        <Button onClick={increment}>
            You've clicked {clickCount} times.
        </Button>
    );
}
```

## API

### `useIncrement(initialValue?: number, step?: number): [value, increment]`

Default hook signature, returns a array representing `[value, increment]`.

- `initialValue`: Initial value for `value`, defaults to 1.
- `step`: Increment step, defaults to 1.


### `increment(): void`

Increment `value` by `step`.

### `increment.by(amount: number): void`

When you want to increment your value by a different amount from `step`, use `increment.by(amount)`.