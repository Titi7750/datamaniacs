// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Champs requis manquants.' }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // expéditeur sécurisé
      to: process.env.CONTACT_TO || "contact@datamaniacs.fr",
      replyTo: email,
      subject: `Message depuis le site - ${company || "sans entreprise"}`,
      html: `
        <h3>Nouveau message de ${name}</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company || "Non précisé"}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Erreur envoi email:", error)
    return NextResponse.json({ message: error.message || "Erreur serveur" }, { status: 500 })
  }
}
