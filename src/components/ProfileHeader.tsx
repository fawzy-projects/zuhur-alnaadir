const ProfileHeader = () => {
  return (
    <header className="pt-10 pb-6 text-center" dir="rtl">
      {/* Logo as full circle image */}
      <div className="relative mx-auto w-32 h-32 mb-5">
        <img
          src="/logo.png"
          alt="مركز برج ايفل للإلكترونيات والاجهزة الكهربائية"
          className="w-full h-full rounded-full object-contain bg-white p-2 ring-4 ring-primary/15 shadow-lg"
        />
      </div>

      <h1 className="text-2xl font-bold text-foreground mb-2 font-tajawal">
        مركز برج ايفل للإلكترونيات والاجهزة الكهربائية
      </h1>

      <p className="text-muted-foreground text-base font-tajawal max-w-xl mx-auto">
        إلكترونيات وأجهزة كهربائية مختارة بعناية — نوفر أحدث المنتجات، عروض مميزة، وخدمة عملاء سريعة في الطائف وما حولها ⚡️
      </p>
    </header>
  );
};

export default ProfileHeader;
