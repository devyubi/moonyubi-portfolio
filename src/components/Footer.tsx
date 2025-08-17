const Footer = () => {
  const handleClickEmail = () => {
    window.location.href = 'mailto:devmunyubi@gmail.com';
  };
  return (
    <footer className="px-20 border-t border-gray-200 py-3 text-sm text-neutral-500 bg-slate-200 dark:text-neutral-400 dark:bg-gray-800">
      <div>포트폴리오 웹&앱 서비스 개발 @ 문유비</div>
      <a href="mailto:dev.munyubi@gmail.com" className="hover:text-blue-600">
        dev.munyubi@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
