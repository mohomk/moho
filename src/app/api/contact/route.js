import { NextResponse } from 'next/server'

export async function GET(req) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405
    }
  );
}

export async function POST(req) {
  const { email, subject, message } = await req.json()
console.log('req', req)
  try {
    let res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        to: [{
          email: 'contact@moho.mk'
        }],
        replyTo: {
          email: email
        },
        sender: {
          name: "MOHO Контакт форма",
          email: "no-reply@moho.mk"
        },
        subject: subject,
        htmlContent: `<html><head></head><body>
          <p><strong>Наслов:</strong> ${subject}</p>
          <p><strong>Е-пошта:</strong> ${email}</p> 
          <p><strong>Порака:</strong> <br/><div style="white-space: pre-line;">${message}</div></p>
          </body></html>`
      })
    })

    return NextResponse.json('', {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send contact form" },
      {
        status: 500,
      }
    );
  }
}
