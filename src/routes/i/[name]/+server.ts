const assets = {
    pfp: "https://github.com/falentio.png"
} as Record<string, string>
export const GET = async ({ params }) => {
    const target = assets[params.name]
    if (!target) {
        return new Response("Not Found", {
            status: 404,
            headers: {
                "cache-control": "public, max-age=300"
            }
        })
    }

    const res = await fetch(target)
    return new Response(res.body, {
        status: res.status,
        headers: {
            "cache-control": res.headers.get("cache-control") || "private, max-age=0",
            "content-type": res.headers.get("content-type") || "text/plain",
        }
    })
}