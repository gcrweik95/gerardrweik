"use server";

import { TFormSchema } from "@/app/contact/page";
import { Resend } from "resend";
import { z } from "zod";

export async function sendEmail(values: TFormSchema) {
  const resend = new Resend("re_PWxQCSnu_B8cPeVnxAdZLAhYc9p6cUF5F");
  const { data, error } = await resend.emails.send({
    from: `Gérard Rweik Portfolio <newprojects@gerardrweik.fr>`,
    to: ["gc.rweik95@gmail.com"],
    subject: "Gerard Rweik - New Potential Client",
    text: `Email = ${values.email} \n\nName = ${values.name} \n\nMessage = ${values.message}`,
  });
  if (error) {
    return false;
  }
  return data !== null;
}
