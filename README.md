# mock-http-req-status

This is a simple service written using NodeJS which returns http request based on docker tags.

This app can be used to test several scenarios in kubernetes. for example liveness probe.

Pattern are available as docker tag:

- 3p
- random

Consideration

> Np is 'first N number of request will return 200 http response status'
> 1 <= N <= 9
