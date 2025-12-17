"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"

export function Contact() {
  const t = useTranslations("contact")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4 text-balance">{t("title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">{t("talkToUs")}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{t("description")}</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("email")}</h4>
                    <a
                      href="mailto:lussandro@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      lussandro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("phone")}</h4>
                    <a href="tel:+5548991286399" className="text-muted-foreground hover:text-primary transition-colors">
                      +55 48 99128-6399
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t("location")}</h4>
                    <p className="text-muted-foreground">{t("address")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 lg:p-8 rounded-2xl border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t("form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("form.namePlaceholder")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t("form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("form.emailPlaceholder")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t("form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("form.phonePlaceholder")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    {t("form.company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("form.companyPlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("form.messagePlaceholder")}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t("form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
