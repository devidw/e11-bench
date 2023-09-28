import * as e11 from "npm:e11"
import * as tinybench from "npm:tinybench@2.5.1"

// const model = "eleven_monolingual_v1"
const model = "eleven_multilingual_v2"
const length = 6
// const length = 12
// const length = 24

const apiConfig = new e11.Configuration({
    apiKey: Deno.env.get("ELEVEN_LABS_API_KEY"),
})

const tts = new e11.TextToSpeechApi(apiConfig)

async function tryOpt(a: number) {
    const res = await tts.textToSpeechV1TextToSpeechVoiceIdPost(
        {
            voiceId: "21m00Tcm4TlvDq8ikWAM",
            optimizeStreamingLatency: a,
            bodyTextToSpeechV1TextToSpeechVoiceIdPost: {
                text: "hello ".repeat(length),
                model_id: model,
            },
        },
        {
            responseType: "arraybuffer",
        }
    )

    console.log(res.statusText)
}

const bench = new tinybench.Bench({ iterations: 2, time: 0 })

bench
    .add("opt=0", async () => {
        await tryOpt(0)
    })
    .add("opt=1", async () => {
        await tryOpt(1)
    })
    .add("opt=2", async () => {
        await tryOpt(2)
    })
    .add("opt=3", async () => {
        await tryOpt(3)
    })
    .add("opt=4", async () => {
        await tryOpt(4)
    })

await bench.run()

console.log(bench.table())

console.log(bench.results)

Deno.writeTextFileSync(`./report_len-${length}_${model}.json`, JSON.stringify(bench.results))
