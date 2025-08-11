# react-native-bridge-mux

A lightweight React Native native-bridge multiplexer that batches and queues requests, enabling multiple native clients to share a single bridge channel with reduced overhead and improved performance.

## Installation


```sh
npm install react-native-bridge-mux
```


## Usage


```js
import { multiply } from 'react-native-bridge-mux';

// ...

const result = multiply(3, 7);
```


## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
