import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      { email_address: email, status: "subscribed" }
    );

    return new Response(
      JSON.stringify({ message: 'Subscription added successfully', res }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    let errorMessage = 'Internal Server Error';

    if (error.response && error.response.text) {
      try {
        const parsedError = JSON.parse(error.response.text);
        errorMessage = parsedError.detail || parsedError.title || errorMessage;
      } catch (e) {
        // If parsing fails, keep the generic error message
      }
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
