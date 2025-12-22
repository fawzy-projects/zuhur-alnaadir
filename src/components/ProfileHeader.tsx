const ProfileHeader = () => {
  return (
    <header className="pt-10 pb-6 text-center" dir="rtl">
      {/* Logo as full circle image */}
      <div className="relative mx-auto w-32 h-32 mb-5">
        <img
          src="/logo.png"
          alt="مشتل زهور النادر"
          className="w-full h-full rounded-full object-contain shadow-md bg-white"
        />
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2 font-tajawal">
        مشتل زهور النادر
      </h1>

      <p className="text-muted-foreground text-base font-tajawal max-w-xl mx-auto">
        نباتات داخلية وخارجية، شتلات، تنسيق حدائق وتركيب شبكات ري – نخدمكم في
        الطائف وما حولها بأعلى جودة وخبرة في عالم النباتات 🌿
      </p>
    </header>
  );
};

export default ProfileHeader;
