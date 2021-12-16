# `open-vercel-dashboard`

An open-source alternative to the vercel dashboard built with nextjs, typescript, react and chakra UI.

## Installation

You can deploy the dashboard on your vercel account with:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftclain%2Fopen-vercel-dashboard&env=VERCEL_AUTH_TOKEN&envDescription=Api%20key%20needed%20to%20access%20the%20vercel%20API.&envLink=https%3A%2F%2Fgithub.com%2Ftclain%2Fopen-vercel-dashboard)

You will need the following:

- A personal access token for your vercel account: `VERCEL_AUTH_TOKEN`. This token can be generated with: https://vercel.com/account/tokens

The project uses the personal token to access the excellent vercel API on your behalf.

## Features:

You can:

- choose a project
- see the list of deployments
- see a specific deployments and its logs

## Development

You should create a `.env` file with your `VERCEL_AUTH_TOKEN` token set as:

```
VERCEL_AUTH_TOKEN=<your-token>
```

### `npm run dev`

Start the app in development mode with auto reload.

## Credits

Kudos to the vercel.com team for the excellent public API.

## Licence

This project is not affiliated with Vercel Inc and is provided without any guarantee.

Copyright (c) 2021 tclain. All rights reserved.

This work is licensed under the terms of the MIT license.  
For a copy, see <https://opensource.org/licenses/MIT>.
