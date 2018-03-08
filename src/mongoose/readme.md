# @tsed/mongoose

> Experimental feature. You can contribute to improve this feature !

A package of Ts.ED framework. See website: https://romakita.github.io/ts-express-decorators/

## Installation

Before using the validation decorators, we need to install the [mongoose](https://www.npmjs.com/package/mongoose) module.

```bash
npm install --save ajv
npm install --save @tsed/mongoose
```

Then import `@tsed/ajv` in your [ServerLoader](api/common/server/serverloader.md):

```typescript
import {ServerLoader, ServerSettings} from "@tsed/common";
import "@tsed/mongoose"; // import mongoose ts.ed module

@ServerSettings({
   mongoose: {
       
   }
})
export class Server extends ServerLoader {

}
```

### Decorators

See our API documentation on https://romakita.github.io/ts-express-decorators/#/api/index

## Example

A model can used on a method controller along with [@BodyParams](api/common/filters/bodyparams.md) or other decorators, and will
be validated by Ajv.

```typescript
import {Required, MaxLength, MinLength, Minimum, Maximum, Format, Enum, Pattern, Email} from "@tsed/common";

export class CalendarModel {
    
    @MaxLength(20)
    @MinLength(3)
    @Required()
    title: string;

    @Minimum(0)
    @Maximum(10)
    rating: number;

    @Email()
    email: string;

    @Format("date")  // or date-time, etc...
    createDate: Date;
    
    @Pattern(/hello/)
    customInput: string;
    
    @Enum("value1", "value2")
    customInput: "value1" | "value2";
}
```
