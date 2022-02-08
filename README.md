## Testhub UI

The UI codebase for TestHub. It's a typescript react/redux project that uses a package.json proxy to the staging backend for TestHub.
This can be overriden to localhost:8080 for local working if the backend is running locally.

The back end Kotlin project can be found here (https://github.com/alexwatts/TestHub)

## Getting Started

You can run local server with:

```
yarn start
```

You should be able to navigate open a browser window to see the UI:
```
http://localhost:3000
```

The UI should look similar to the one running on staging:

```
http://138.68.170.14:30001
```

There is a Jenkins pipeline for deploying the main branch to staging. It's the job named 'TestHub-pipeline'

```
username: testhub
password: contributor

http://138.68.170.14:30000
```

In the same jenkins instance there is job that can be run to populate new test results into the staging back end.
It's called `test-examples` an you can find the code for it here (https://github.com/alexwatts/test-examples)