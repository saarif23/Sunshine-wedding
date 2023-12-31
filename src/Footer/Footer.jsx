

const Footer = () => {
    return (
        <footer className="grid max-md:grid-cols-1 max-lg:grid-cols-3 max-lg:gap-10 lg:grid-cols-4  py-10 px-20 bg-indigo-950 text-white">
            <div className="max-lg:col-span-3 max-md:col-span-1">
               <img className="w-36 max-lg:mx-auto" src="https://i.ibb.co/GJsnv3D/logo.jpg" alt="sunshine Wedding" />
                <p className="max-lg:text-center">Sunshine Wedding<br />Providing reliable wedding since 2017</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Services</header>
                <p className="link link-hover">Wedding Planing</p>
                <p className="link link-hover">Wedding Packages</p>
                <p className="link link-hover">Family & Kids Photography</p>
                <p className="link link-hover">Wedding Photography</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Company</header>
                <p className="link link-hover">About us</p>
                <p className="link link-hover">Contact</p>
                <p className="link link-hover">Career</p>
                <p className="link link-hover">Press kit</p>
            </div>
            <div className="max-md:text-center">
                <header className="footer-title">Legal</header>
                <p className="link link-hover">License</p>
                <p className="link link-hover">Terms & Conditions</p>
                <p className="link link-hover">Privacy policy</p>
                <p className="link link-hover">Cookie policy</p>
            </div>
        </footer>
    );
};

export default Footer;