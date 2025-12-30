# Random User Generator Wrapper (TypeScript)

A strongly-typed wrapper for the [Random User Generator API](https://randomuser.me/).

## Features

-   **TypeScript Support**: Full type definitions for User objects.
-   **Flexible Fetching**: Specify gender, nationality, seed, and result count.
-   **Promise-based**: Async/await friendly.

## Installation

```bash
npm install
```

## Usage

```typescript
import { RandomUserClient } from './src';

const client = new RandomUserClient();

async function main() {
    // Get a single user
    const user = await client.getUser();
    console.log(`Hello, ${user.name.first} ${user.name.last}!`);

    // Get 5 users, female only, from US
    const users = await client.getUsers({
        results: 5,
        gender: 'female',
        nat: 'us' // Nationalities: us, gb, fr, etc.
    });

    users.forEach(u => console.log(u.email));
}

main();
```

## API

### `getUser(options)`
Fetch a single random user.

### `getUsers(options)`
Fetch multiple random users. Options include:
- `results`: Number of users (default 1)
- `gender`: 'male' | 'female'
- `nat`: Nationality code (e.g. 'us', 'gb')
- `seed`: String for deterministic results

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

MIT


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
