import React from 'react'

export default function ContactSection() {
    return (
        <section id="contact" className="mb-24 py-12 text-center">
            <h2 className="text-3xl font-bold text-slate-200 mb-6">Get In Touch</h2>
            <p className="text-slate-400 mb-8 max-w-lgmx-auto ">
                Although I&apos;m not currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <a
                href="mailto:hello@example.com"
                className=" px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 "
            >
                Say Hello
            </a>
        </section>
    )
}
