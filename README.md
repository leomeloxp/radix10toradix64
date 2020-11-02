# Radix 10 to radix 64

Converts radix-10 numbers to their radix-64 numerical equivalent and back. Inspired by [this](https://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript) Stack Overflow question.

This module is originally written in Typescript using [TSDX](https://tsdx.io/).

## Usage

ES Modules environment:

```js
import Radix10ToRadix64 from 'radix10toradix64';

const converter = new Radix10ToRadix64();
// To radix 64
converter.toRadix64(4096); // '100'
converter.toRadix64(62831853071); // 'wX4VuF'
// From radix 64
converter.toRadix10('4096'); // 1049158
converter.toRadix10('628318530'); // 1698198949220544
```

CommonJS:

```js
const Radix10ToRadix64 = require('radix10toradix64').default;
const converter = new Radix10ToRadix64();
// To radix 64
converter.toRadix64(4096); // '100'
converter.toRadix64(62831853071); // 'wX4VuF'
// From radix 64
converter.toRadix10('4096'); // 1049158
converter.toRadix10('628318530'); // 1698198949220544
```

## Contributing

The initial goal of this module is to provide basic radix 10 to radix 64 conversion for a side project of mine. Whilst I have no intentions of making this a complex library and add lots of functionality myself, you're welcome to submit PRs with new features.

If you found a bug, please open an issue and I'll do my best to get it sorted asap. If you can submit a PR with the bugfix that is even better!

## License

MIT, see [LICENSE.md](./LICENSE.md).

Copyright (c) 2018 Leonardo Melo.
