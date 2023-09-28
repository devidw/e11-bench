# eleven labs api bench of `optimizeStreamingLatency`

was doing benchs of `optimizeStreamingLatency` with `0` up to `4` (5 in total) for `eleven_multilingual_v2`

> You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values: 0 - default mode (no latency optimizations) 1 - normal latency optimizations (about 50% of possible latency improvement of option 3) 2 - strong latency optimizations (about 75% of possible latency improvement of option 3) 3 - max latency optimizations 4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates). Defaults to 0.

not seeing any significant difference in the mean response time of the api using the differnt param values

sometimes the fastest even the slowest, or all 5 configs roughly the same for a ~10 word input around 2-2.1 seconds

was only doing a set of 2 calls per config - so not sure how this will look at for example 100 or 1000 calls per config - don't wanted to waste paid tokens just for this =D

## reproduce

need to have deno installed

```
ELEVEN_LABS_API_KEY=... deno run --allow-all ./e11.ts
```
