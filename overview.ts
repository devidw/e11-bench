const files = {
    "report_len-12_eleven_monolingual_v1.json": {},
    "report_len-24_eleven_monolingual_v1.json": {},
    "report_len-6_eleven_multilingual_v2.json": {},
    "report_len-12_eleven_multilingual_v2.json": {},
    "report_len-24_eleven_multilingual_v2.json": {},
}

Object.keys(files).forEach((path) => {
    const raw = Deno.readTextFileSync(path)
    const json = JSON.parse(raw)
    files[path] = {
        "0": json[0].mean,
        "1": json[1].mean,
        "2": json[2].mean,
        "3": json[3].mean,
        "4": json[4].mean,
    }
})

Deno.writeTextFileSync("overview.json", JSON.stringify(files, null, 4))
