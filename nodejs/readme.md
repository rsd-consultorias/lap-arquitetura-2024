# NodeJS - Checkout flow

## Classes

![Classes](../docs/nodejs-classes.jpg)

## API First

```bash
# Test the project
clear && npm run test

# Build the project
clear && npm run build

# Generates API doc from yml definition
npx openapi-generator-cli generate -i subscription-v1.yml -g openapi -o dist/subscription/docs
npx openapi-generator-cli generate -i subscription-v1.yml -g html -o dist/subscription/docs

npx openapi-generator-cli generate -i order-v1.yml -g openapi -o dist/order/docs
npx openapi-generator-cli generate -i order-v1.yml -g html -o dist/order/docs

# Run API
SERVER_PORT=8080 node .dist/order/index.js | SERVER_PORT=8081 node .dist/subscription/index.js
```



# References

[The Checkout Flow](https://medium.com/@adriancostea/https-medium-com-adriancostea-checkout-flow-a9235926076b)

[Designing a seamless checkout flow: Definition, best practices, case studies](https://blog.logrocket.com/ux-design/designing-seamless-checkout-flow/)

[How To Design A Great Ecommerce Checkout Flow](https://www.bolt.com/thinkshop/ecommerce-checkout-process-flow)

[Payment First Checkout Experience](https://miro.medium.com/v2/resize:fit:2000/1*b2mBh9fTzjHnU4isXWTapw.jpeg)

[Integração com PayPal com NodeJS](https://www.youtube.com/watch?v=_5BCCaMUD_U)

[Integração com PayPal com NodeJS (continuação)](https://www.youtube.com/watch?v=GJXyps4FtHU)

[PayPal Developer](https://developer.paypal.com/home)

[PayPal Plus - Brazil](https://developer.paypal.com/docs/regional/br/)

[Blog PayPal Tech](https://medium.com/paypal-tech)