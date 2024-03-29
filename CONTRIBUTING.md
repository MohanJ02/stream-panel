### Code of Conduct

Be excellent to each another. Please refer to our [Community Code of Conduct](./CODE_OF_CONDUCT.md).

### Finding issues to work on

- `good first issue` - issues where there is a clear path to resolution
- `help wanted`- issues where we've identified a need but not resources to work on them
- `priority/important-soon` or `priority/important-longterm` - high impact issues that need to be addressed in the next couple of releases.

- Ask on the #JeevOps Discord if you aren't sure

Once you've discovered an issue to work on:

- Add a comment mentioning that you plan to work on the issue
- Send a PR out that mentions the issue

### Local Setup for Development

- We use `pnpm` package manager. Get it [here](https://pnpm.io/installation).
- Make sure Docker up and running.`
- Fork and clone the repository

#### Install dependencies

```bash
cd stream-panel
pnpm install
```

#### Setup environment variables

For the first time, you need some default environment variables:

```bash
cp .env.development.example .env
```

#### If you want to use magic link login

Uncomment the `SMPT` section in `.env` file. By default we already set Mailpit for you.

The mailbox can be reach at http://localhost:8025


#### If you want to use GitHub login

Uncomment the `GITHUB` section in .env file. Follow this [documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) to configure the authentication.

#### Let's get started!

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and start developing.

## Further instructions

Currently we leave only EasyPanel helper actions along with its templates. This is heavy and repetitive task that's why we don't want to add all the templates from EasyPanel.

The main idea of this STREAM PANEL is, you can use it to quickly start developing a product/service and serve your customers right away.

It does not mean to replace the EasyPanel product.

To use EasyPanel function, you need to obtain an API key and set up the .env file:

```bash
EASYPANEL_URL=https://your-easypanel.url
EASYPANEL_API_KEY=your-easypanel-apikey
```
