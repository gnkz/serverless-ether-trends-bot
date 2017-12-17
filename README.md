# Serverless twitter bot

Twitter bot powered by [Serverless](https://serverless.com) and hosted in [AWS Lambda](https://aws.amazon.com/lambda/) that search ethereum related repositories using the [Github search api](https://developer.github.com/v3/search), and tweets about them on a daily, weekly and monthly basis.

You can find the Twitter bot [@bot_ether](https://twitter.com/bot_ether).

## Configuration

To configure the twitter credentials you need to create a `env.yml` file like this:

``` yml
dev:
  NODE_ENV: 'development'
prod:
  CONSUMER_KEY: 'Twitter consumer key'
  CONSUMER_SECRET: 'Twitter consumer secret'
  ACCESS_TOKEN_KEY: 'Twitter access token key'
  ACCESS_TOKEN_SECRET: 'Twitter access token secret'
  NODE_ENV: 'production'
```

## Running locally

To run a function locally:

`serverless invoke local -f (daily|weekly|monthly) -s (dev|prod)`

If `NODE_ENV` is set as `development` on `env.yml` the bot won't publish the tweet. To override this you need to add your twitter credentials and set the `NODE_ENV` to something like `production` on your stage configuration in `env.yml`.

## Deployment

The serverless functions are configured to be deployed to [AWS Lambda](https://aws.amazon.com/lambda/), so you need to [configure your credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) and then deploy:

`serverless deploy -s (dev|prod)`

## License

Copyright 2017 Gonzalo Sánchez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.