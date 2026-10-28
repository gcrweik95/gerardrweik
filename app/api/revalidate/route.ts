import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true, // delay to let Sanity's CDN catch up before we revalidate
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Missing _type in payload", { status: 400 });
    }

    // siteSettings is a singleton with a fixed _id, not queried by _type
    // anywhere except its own tag — same tag name either way.
    // Next.js 16 requires a cache-life profile as the 2nd arg; "max" means
    // revalidate fully/immediately rather than following a stale-while-
    // revalidate window.
    revalidateTag(body._type, "max");

    return NextResponse.json({ revalidated: body._type, now: Date.now() });
  } catch (err) {
    console.error("Revalidation webhook error:", err);
    // Never leak internal error details (stack traces, library-specific
    // messages) to a public-internet-reachable endpoint.
    return new Response("Internal error", { status: 500 });
  }
}
