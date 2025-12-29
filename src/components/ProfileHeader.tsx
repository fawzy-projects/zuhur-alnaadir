const ProfileHeader = () => {
  return (
    <header className="pt-10 pb-6 text-center" dir="rtl">
      {/* Logo as full circle image */}
      <div className="relative mx-auto w-32 h-32 mb-5">
        <img
          src="/logo.png"
          alt="BAZAD GROUP"
          className="w-full h-full rounded-full object-contain shadow-md bg-white"
        />
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2 font-tajawal">
        BAZAD GROUP
      </h1>

      <p className="text-muted-foreground text-base font-tajawal max-w-2xl mx-auto leading-relaxed">
        <span className="font-semibold text-foreground">نبني شركتك… ونقود نجاحك</span>
        <span className="mx-2 text-muted-foreground">|</span>
        <span className="font-semibold">Building Businesses. Shaping Success.</span>
        <br />
        شركة حلول أعمال واستشارات شاملة — تأسيس شركات، تخطيط بيزنس، تسويق، حوكمة، تسجيل علامات تجارية، ترجمة وتدقيق لغوي،
        استشارات قانونية، وحلول برمجيات الذكاء الاصطناعي.
      </p>
    </header>
  );
};

export default ProfileHeader;
