# TypeScript Extends Bug

Following any tutorial including the [official](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) tutorial 
on using the `extends` option inside your `tsconfig.json` you are lead to believe that a proper merge of your compilerOptions
will occur, but seems to only perform a shallow merge and will overwrite the `compilerOptions` from the base configuration you are extended.

To reproduce:

```sh
npm install
npm test
```

To verify that the error that occurs is due a lack of merging tsconfig.json `compilerOptions` add `"target": "es5",` to the `compilerOptions` of `tsconfig.json` and run `npm test` again and it will continue to work. This configuration *is* present in `tsconfig.base.json` but is seeminly overwritten rather than merged together.
