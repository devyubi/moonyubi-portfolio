export default function MainIntro() {
  return (
    <section className="p-8 text-center bg-gray-50 dark:bg-gray-700">
      <h1 className="font-bold dark:text-gray-100">안녕하세요!</h1>
      <p className=" text-gray-600 dark:text-gray-300">
        프론트엔드 개발자 문유비의 포트폴리오 사이트입니다.
      </p>

      {/* 상단 문구 */}
      <div className="mt-4 space-y-2 leading-relaxed dark:text-gray-400">
        <p>빠르게 변화하는 프론트엔드 환경 속에서</p>
        <p>
          끊임없는 <span className="text-blue-600 dark:text-blue-400">학습과 성장</span>을 즐깁니다.
        </p>
        <p>
          <span className="text-emerald-600 dark:text-emerald-400">
            &quot;어제보다 나은 개발자&quot;
          </span>
          가 되는 것을 목표로,
        </p>
        <p>작은 것부터 꾸준히 개선하고 있습니다.</p>
      </div>

      <hr className="my-10 border-gray-300 dark:border-gray-600" />

      {/* 학력 */}
      <div className="space-y-1 text-sm dark:text-gray-300">
        <h2 className="text-xl font-semibold">학력</h2>
        <p>北大附属实验学校 (북경대부속실험학교 초/중졸)</p>
        <p>北京二十一世纪国际学校 (북경21세기국제학교 고졸)</p>
      </div>
    </section>
  );
}
