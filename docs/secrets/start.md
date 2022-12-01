# Getting Started

Welcome to the Nosana secrets documentation.
Here you will learn everything that you need to know to get up and started with Nosana Secrets.

## Introduction

Projects that are posting jobs/pipelines to the Nosana Network might want to share secrets that are needed
to run their job with the Nodes that are running their jobs.
This can now be achieved with the **Nosana Secret Manager**.
Projects can securely store their secrets to a Secret Manager
(hosted by Nosana, or you can [host your own](#host-your-own-secrets-manager))
and specify per job which secrets the node that will run that job can retrieve.

## How does it work?

### Authentication
Everyone can store secrets (key/value pairs) in the secret manager under the scope of their own solana public key,
as long as you can prove that you own that solana address.
You can prove this by signing a custom message (`nosana_secret_${timestamp}`).
Make sure that the timestamp in the message is not older than **60 seconds**.
With this signature you can [retrieve a JWT token](api#authentication) to manage your secrets.

### Adding secrets to your jobs

After you have added secrets to a secret manager you can add them to your job IPFS JSON file to give the node
that is running your job access to these secrets:

``` javascript
{
  "type": "Github",
  "url": "https://github.com/nosana-ci/secrets.git",
  "commit": "c47115da3e1dbb3666784ab3f0a6af316acc4a77",
  "secrets": ["pipeline1-ssh-key"],
  "pipeline": "pipeline1-yml-goes-here"
}
```

Nodes that are running jobs can access the secret keys specified in the `secrets` array in this file.
Nodes can get read-only access to these secrets by authentication to the secret manager with an
additional `job` parameter during authentication.

If you are using the Nosana Platform with the Github App integration, then you can just specify these secrets
in your `.nosana-ci.yml` file and the Nosana Platform will automatically retrieve the secret keys from this YAML
file and put them in your Job IPFS JSON file.

Here an example how you would use the secrets in your [`.nosana-ci.yml`](pipelines/specification) file:

``` yml
jobs:
  - name: test-secret-manager
    environment:
      SECRET_VALUE:
        type: nosana/secret
        endpoint: https://secrets.nosana.ci
        value: pipeline1-ssh-key
    commands:
      - env
      - sh -c 'echo test secret manager value $SECRET_VALUE'
```

The Nosana Node will try to authenticate to the secret manager endpoint and replace the value with
the secret value retrieved from the secret manager.

## API

[API Specification](api)

## Nosana's Secret Managers

Nosana is currently hosting two secret managers, one for dev purposes and one production secret manager.
You can find them here:

##### Nosana Secret Manager on Solana Mainnet

`https://secrets.nosana.ci`

##### Nosana Secret Manager on Solana Devnet

`https://secrets.k8s.dev.nos.ci`

### Infrastructure

documentation coming soon!

## Host your own Secret Manager

Although Nosana is providing you with a very safe and secure way to store secrets in their hosted Secret Manager, you
can also decide to host your own Secret Manager! More documentation about how to do this is coming soon!