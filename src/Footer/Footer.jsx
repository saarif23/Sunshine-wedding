

const Footer = () => {
    return (
        <footer className="footer py-10 px-20 bg-gray-800 text-white">
            <aside>
               <img className="w-36" src="https://i.ibb.co/z7BZBYQ/sunshine-wedding-low-resolution-color-logo.png" alt="sunshine Wedding" />
                <p>Sunshine Wedding<br />Providing reliable wedding since 2017</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Wedding Planing</a>
                <a className="link link-hover">Wedding Packages</a>
                <a className="link link-hover">Family & Kids Photography</a>
                <a className="link link-hover">Wedding Photography</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Career</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">License</a>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;