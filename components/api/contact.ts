import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" })
  }

  const { name, email, company, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Champs requis manquants." })
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
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_TO || "contact@datamaniacs.fr",
      subject: `Message depuis le site - ${company || "sans entreprise"}`,
      html: `
        <h3>Nouveau message de ${name}</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company || "Non précisé"}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error("Erreur envoi email:", error)
    res.status(500).json({ message: "Erreur serveur. Merci de réessayer plus tard." })
  }
}
