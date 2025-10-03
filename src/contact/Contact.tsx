import './contact.css'
import ContactCard from './ContactCard'
export default function Contact(){
    

    return (
        <div className='contact'>
            <h1 className="contact_title">Reach Out Here!</h1>
            <ContactCard
                title="Contact"
                items={[
                    {
                    label: "Email",
                    value: "ahonjaya@cs.washington.edu",
                    href: "ahonjaya@cs.washington.edu",
                    iconSrc: "/imgs/mail.svg",
                    iconAlt: "Email"
                    },
                    {
                    label: "LinkedIn",
                    value: "linkedin.com/in/aaron-honjaya",
                    href: "https://www.linkedin.com/in/aaron-honjaya",
                    iconSrc: "/imgs/linkedin.png",
                    newTab: true
                    },
                    {
                    label: "Github",
                    value: "github.com/AaronHonjaya",
                    href: "https://github.com/AaronHonjaya",
                    iconSrc: "/imgs/skills/git.jpg",
                    newTab: true
                    }
                ]}
            />
        </div>
    )
}