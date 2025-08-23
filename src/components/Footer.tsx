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
<<<<<<< HEAD
=======
      <br />
      <a
        href="https://www.notion.so/Portfolio-21cd08a49cc3809ebe46e9c05321d09c"
        target="_blank"
        rel="noopener noreferrer" // 보안상 꼭 추가 해야함
        className="underline border overflow-hidden shadow hover:text-blue-600 transition transform hover:-translate-y-1"
      >
        Notion 문유비 포트폴리오 보러가기
      </a>
>>>>>>> 4396a1eacfdbb8939f7e5c09d25c0065a1dd8eab
    </footer>
  );
};

export default Footer;
