import ProfileHeader from "@/components/ProfileHeader";
import CardsGrid from "@/components/CardsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-tajawal">
      <div className="max-w-5xl mx-auto">
        <ProfileHeader />
        <CardsGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
