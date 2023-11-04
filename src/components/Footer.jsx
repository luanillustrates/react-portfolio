import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-4 bg-neutral text-primary-content">
        <aside>
          <img
            src="./src/assets/images/logo_white.png"
            alt="testing"
            className="h-12"
          />
          <p className="py-1">Copyright © 2023 - All right reserved</p>
          <nav>
            <div className="grid grid-flow-col gap-4 py-2">
              <a
                href="https://github.com/luanillustrates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/luan-tran-4237b4299/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </nav>
        </aside>
      </footer>
    </>
  );
}
