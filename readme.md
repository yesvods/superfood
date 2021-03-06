# superfood [![Build Status](https://travis-ci.org/yesvods/superfood.svg?branch=master)](https://travis-ci.org/yesvods/superfood)

> Get superfood names

![](https://cloud.githubusercontent.com/assets/170270/7563453/ad57a684-f7dd-11e4-8302-081f132e8653.png)

The list is just a [JSON file](superfood.json) and can be used wherever.


## Install

```
$ npm install --save superfood
```


## Usage

```js
var superfood = require('superfood');

superfood.random();
//=> 'persimmon'
```


## API

### .all

Type: `array`

Superfood names in alphabetical order.

### .random()

Type: `function`

Random superfood name.


## CLI

```
$ npm install --global superfood
```

```
$ superfood --help

  Examples
    $ superfood
    carrot

    $ superfood --all
    cake
    bread
    ...

  Options
    --all   Get all names instead of a random name
```


## Related

- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

PowerBy [Superheroes](https://github.com/sindresorhus/superheroes)

MIT © [Jogis](https://github.com/yesvods)
