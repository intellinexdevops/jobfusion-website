import React from "react";


export default function ModalLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <section>
        {children}
    </section>
}