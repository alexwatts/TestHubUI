## Testhub UI

The UI codebase for TestHub. It's a typescript react/redux project that uses a package.json proxy to pass requests to the staging backend for TestHub.
This can be overridden to localhost:8080 for local working if the backend is running locally.

The back end Kotlin project can be found [Here](https://github.com/alexwatts/TestHub)

## Getting Started

You can run local server with:

```
yarn start
```

You should be able to navigate open a browser window to see the UI:
```
http://localhost:3000
```


In the same jenkins instance there is job that can be run to populate new test results into the staging back end.
It's called `test-examples` and you can find the code for it [Here](https://github.com/alexwatts/test-examples)

## Authors

* **Alex Watts** - (https://github.com/alexwatts)

## License

This project is licensed under the MIT License

## Acknowledgments

* https://tech.ebayinc.com/engineering/failbot


TODO
https://www.youtube.com/watch?v=vvUwHagmxvY
