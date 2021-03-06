# Oblique Strategies

An Alexa skill for the Amazon Echo making use of the [Oblique Strategies API](http://brianeno.needsyourhelp.org/info)
by [Andrew Monk](https://monks.co/). Generated by [generator-alexa-skill](https://github.com/cameronhunter/generator-alexa-skill).

## Example phrases
```
Alexa, ask Oblique Strategies for a strategy
Alexa, ask Oblique Strategies for inspiration
Alexa, ask Oblique Strategies for an idea
```

See `model/UTTERANCES` for more example phrases.

## Development

### Test

```bash
npm test
```

### Package

```bash
npm run package
```

This creates `build/package.zip` containing the compiled skill - this can be uploaded directly to AWS Lambda. It exposes a single function `index.hander`. Skill utterances defined in the `model` directory are expanded and output to `build/UTTERANCES`.

### Deploy

```bash
npm run deploy
```

If you configure the project with AWS credentials then you can build, test, package and deploy the project with a single command. You can check it out in the [AWS console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/oblique-strategies).
