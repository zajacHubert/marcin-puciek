import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Wiadomość ze strony`,
      text: `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    };

    // Wysłanie wiadomości
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
