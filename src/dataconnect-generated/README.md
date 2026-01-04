# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProjects*](#listprojects)
  - [*GetTestimonial*](#gettestimonial)
- [**Mutations**](#mutations)
  - [*CreateCompanyInfo*](#createcompanyinfo)
  - [*UpdateTeamMember*](#updateteammember)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProjects
You can execute the `ListProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProjects(): QueryPromise<ListProjectsData, undefined>;

interface ListProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsData, undefined>;
}
export const listProjectsRef: ListProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProjects(dc: DataConnect): QueryPromise<ListProjectsData, undefined>;

interface ListProjectsRef {
  ...
  (dc: DataConnect): QueryRef<ListProjectsData, undefined>;
}
export const listProjectsRef: ListProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProjectsRef:
```typescript
const name = listProjectsRef.operationName;
console.log(name);
```

### Variables
The `ListProjects` query has no variables.
### Return Type
Recall that executing the `ListProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
  } & Project_Key)[];
}
```
### Using `ListProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProjects } from '@dataconnect/generated';


// Call the `listProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
listProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `ListProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProjectsRef } from '@dataconnect/generated';


// Call the `listProjectsRef()` function to get a reference to the query.
const ref = listProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

## GetTestimonial
You can execute the `GetTestimonial` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTestimonial(vars: GetTestimonialVariables): QueryPromise<GetTestimonialData, GetTestimonialVariables>;

interface GetTestimonialRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTestimonialVariables): QueryRef<GetTestimonialData, GetTestimonialVariables>;
}
export const getTestimonialRef: GetTestimonialRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTestimonial(dc: DataConnect, vars: GetTestimonialVariables): QueryPromise<GetTestimonialData, GetTestimonialVariables>;

interface GetTestimonialRef {
  ...
  (dc: DataConnect, vars: GetTestimonialVariables): QueryRef<GetTestimonialData, GetTestimonialVariables>;
}
export const getTestimonialRef: GetTestimonialRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTestimonialRef:
```typescript
const name = getTestimonialRef.operationName;
console.log(name);
```

### Variables
The `GetTestimonial` query requires an argument of type `GetTestimonialVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetTestimonialVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetTestimonial` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTestimonialData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTestimonialData {
  testimonial?: {
    clientName: string;
    quote: string;
    date: DateString;
  };
}
```
### Using `GetTestimonial`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTestimonial, GetTestimonialVariables } from '@dataconnect/generated';

// The `GetTestimonial` query requires an argument of type `GetTestimonialVariables`:
const getTestimonialVars: GetTestimonialVariables = {
  id: ..., 
};

// Call the `getTestimonial()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTestimonial(getTestimonialVars);
// Variables can be defined inline as well.
const { data } = await getTestimonial({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTestimonial(dataConnect, getTestimonialVars);

console.log(data.testimonial);

// Or, you can use the `Promise` API.
getTestimonial(getTestimonialVars).then((response) => {
  const data = response.data;
  console.log(data.testimonial);
});
```

### Using `GetTestimonial`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTestimonialRef, GetTestimonialVariables } from '@dataconnect/generated';

// The `GetTestimonial` query requires an argument of type `GetTestimonialVariables`:
const getTestimonialVars: GetTestimonialVariables = {
  id: ..., 
};

// Call the `getTestimonialRef()` function to get a reference to the query.
const ref = getTestimonialRef(getTestimonialVars);
// Variables can be defined inline as well.
const ref = getTestimonialRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTestimonialRef(dataConnect, getTestimonialVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.testimonial);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.testimonial);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateCompanyInfo
You can execute the `CreateCompanyInfo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCompanyInfo(): MutationPromise<CreateCompanyInfoData, undefined>;

interface CreateCompanyInfoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateCompanyInfoData, undefined>;
}
export const createCompanyInfoRef: CreateCompanyInfoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCompanyInfo(dc: DataConnect): MutationPromise<CreateCompanyInfoData, undefined>;

interface CreateCompanyInfoRef {
  ...
  (dc: DataConnect): MutationRef<CreateCompanyInfoData, undefined>;
}
export const createCompanyInfoRef: CreateCompanyInfoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCompanyInfoRef:
```typescript
const name = createCompanyInfoRef.operationName;
console.log(name);
```

### Variables
The `CreateCompanyInfo` mutation has no variables.
### Return Type
Recall that executing the `CreateCompanyInfo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCompanyInfoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCompanyInfoData {
  companyInfo_insert: CompanyInfo_Key;
}
```
### Using `CreateCompanyInfo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCompanyInfo } from '@dataconnect/generated';


// Call the `createCompanyInfo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCompanyInfo();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCompanyInfo(dataConnect);

console.log(data.companyInfo_insert);

// Or, you can use the `Promise` API.
createCompanyInfo().then((response) => {
  const data = response.data;
  console.log(data.companyInfo_insert);
});
```

### Using `CreateCompanyInfo`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCompanyInfoRef } from '@dataconnect/generated';


// Call the `createCompanyInfoRef()` function to get a reference to the mutation.
const ref = createCompanyInfoRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCompanyInfoRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.companyInfo_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.companyInfo_insert);
});
```

## UpdateTeamMember
You can execute the `UpdateTeamMember` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateTeamMember(vars: UpdateTeamMemberVariables): MutationPromise<UpdateTeamMemberData, UpdateTeamMemberVariables>;

interface UpdateTeamMemberRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTeamMemberVariables): MutationRef<UpdateTeamMemberData, UpdateTeamMemberVariables>;
}
export const updateTeamMemberRef: UpdateTeamMemberRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateTeamMember(dc: DataConnect, vars: UpdateTeamMemberVariables): MutationPromise<UpdateTeamMemberData, UpdateTeamMemberVariables>;

interface UpdateTeamMemberRef {
  ...
  (dc: DataConnect, vars: UpdateTeamMemberVariables): MutationRef<UpdateTeamMemberData, UpdateTeamMemberVariables>;
}
export const updateTeamMemberRef: UpdateTeamMemberRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateTeamMemberRef:
```typescript
const name = updateTeamMemberRef.operationName;
console.log(name);
```

### Variables
The `UpdateTeamMember` mutation requires an argument of type `UpdateTeamMemberVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateTeamMemberVariables {
  id: UUIDString;
  bio?: string | null;
}
```
### Return Type
Recall that executing the `UpdateTeamMember` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateTeamMemberData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateTeamMemberData {
  teamMember_update?: TeamMember_Key | null;
}
```
### Using `UpdateTeamMember`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateTeamMember, UpdateTeamMemberVariables } from '@dataconnect/generated';

// The `UpdateTeamMember` mutation requires an argument of type `UpdateTeamMemberVariables`:
const updateTeamMemberVars: UpdateTeamMemberVariables = {
  id: ..., 
  bio: ..., // optional
};

// Call the `updateTeamMember()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateTeamMember(updateTeamMemberVars);
// Variables can be defined inline as well.
const { data } = await updateTeamMember({ id: ..., bio: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateTeamMember(dataConnect, updateTeamMemberVars);

console.log(data.teamMember_update);

// Or, you can use the `Promise` API.
updateTeamMember(updateTeamMemberVars).then((response) => {
  const data = response.data;
  console.log(data.teamMember_update);
});
```

### Using `UpdateTeamMember`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateTeamMemberRef, UpdateTeamMemberVariables } from '@dataconnect/generated';

// The `UpdateTeamMember` mutation requires an argument of type `UpdateTeamMemberVariables`:
const updateTeamMemberVars: UpdateTeamMemberVariables = {
  id: ..., 
  bio: ..., // optional
};

// Call the `updateTeamMemberRef()` function to get a reference to the mutation.
const ref = updateTeamMemberRef(updateTeamMemberVars);
// Variables can be defined inline as well.
const ref = updateTeamMemberRef({ id: ..., bio: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateTeamMemberRef(dataConnect, updateTeamMemberVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.teamMember_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.teamMember_update);
});
```

